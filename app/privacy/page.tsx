import { ShieldCheck, Lock } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="opacity-90 max-w-2xl mx-auto">
            Your privacy is important to us. We are committed to protecting your data.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8">
        <PolicyBlock
          title="Information We Collect"
          text="We collect basic personal information such as name, email address, and profile details to provide our services effectively."
        />
        <PolicyBlock
          title="How We Use Your Data"
          text="Your data is used to personalize job recommendations, improve user experience, and communicate important updates."
        />
        <PolicyBlock
          title="Data Security"
          text="We implement strong security measures to protect your information from unauthorized access."
        />
        <PolicyBlock
          title="Third-Party Sharing"
          text="We do not sell or share your personal information with third parties without your consent."
        />
      </section>

    </div>
  )
}

function PolicyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}
