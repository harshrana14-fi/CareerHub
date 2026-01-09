import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <MessageCircle className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="opacity-90 max-w-2xl mx-auto">
            Have questions or feedback? We’re here to help you.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={<Mail />}
            title="Email"
            value="support@careerhub.com"
          />
          <ContactCard
            icon={<Phone />}
            title="Phone"
            value="+91 98765 43210"
          />
          <ContactCard
            icon={<MapPin />}
            title="Location"
            value="India"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          🚧 Contact form coming soon
        </p>
      </section>

    </div>
  )
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div className="text-primary flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{value}</p>
    </div>
  )
}
