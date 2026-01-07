import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/db/mongoDb";
import { CompanyModel } from "@/models/Company.Model";
import { companySignupSchema } from "@/lib/validations/auth";

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        
        const body = await request.json();
        const validatedData = companySignupSchema.parse(body);
        
        // Check if company already exists
        const existingCompany = await CompanyModel.findOne({ 
            email: validatedData.email.toLowerCase() 
        });
        
        if (existingCompany) {
            return NextResponse.json(
                { message: "Company with this email already exists" },
                { status: 400 }
            );
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(validatedData.password, 12);
        
        // Create company
        const company = await CompanyModel.create({
            name: validatedData.name,
            email: validatedData.email.toLowerCase(),
            password: hashedPassword,
            website: validatedData.website || undefined,
            location: validatedData.location,
            industry: validatedData.industry,
            size: validatedData.size,
            isVerified: false,
        });
        
        return NextResponse.json(
            { 
                message: "Company registered successfully!",
                companyId: company._id 
            },
            { status: 201 }
        );
        
    } catch (error: any) {
        console.error("Company registration error:", error);
        
        if (error.name === 'ZodError') {
            return NextResponse.json(
                { message: error.errors[0].message },
                { status: 400 }
            );
        }
        
        if (error.code === 11000) {
            return NextResponse.json(
                { message: "Company with this email already exists" },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}