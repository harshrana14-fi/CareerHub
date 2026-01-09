import { FileText, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="bg-gradient-to-r from-neutral-700 to-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <FileText className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="opacity-90 max-w-2xl mx-auto">
            Please read these terms carefully before using CareerHub.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8">
        <TermBlock
          title="Acceptance of Terms"
          text="By accessing or using our platform, you agree to comply with these terms and conditions."
        />
        <TermBlock
          title="User Responsibilities"
          text="Users must provide accurate information and use the platform ethically."
        />
        <TermBlock
          title="Account Termination"
          text="We reserve the right to suspend or terminate accounts that violate our policies."
        />
        <TermBlock
          title="Limitation of Liability"
          text="CareerHub is not responsible for losses resulting from the use of our services."
        />
      </section>

    </div>
  )
}

function TermBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}
