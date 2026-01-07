"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/ui/sidebar"
import { Building2, Plus, BarChart3, Settings, Users } from "lucide-react"

export default function CompanyDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!session) {
    redirect("/login")
  }

  const sidebarItems = [
    { icon: BarChart3, label: "Overview", href: "/company-dashboard" },
    { icon: Plus, label: "Post Job", href: "/company-dashboard/post-job" },
    { icon: Users, label: "My Jobs", href: "/company-dashboard/jobs" },
    { icon: Settings, label: "Settings", href: "/company-dashboard/settings" },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="w-64 border-r">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Company Portal</span>
          </div>
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Sidebar>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}