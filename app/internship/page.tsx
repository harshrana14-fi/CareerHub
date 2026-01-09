import {
  Briefcase,
  MapPin,
  Clock,
  Search,
  Laptop,
  Sparkles,
} from "lucide-react"

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Launch Your Career with Internships
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Gain real-world experience, build skills, and work with top companies.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard title="500+" subtitle="Active Internships" />
          <StatCard title="Paid & Remote" subtitle="Opportunities" />
          <StatCard title="Top Startups" subtitle="Hiring Now" />
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-card rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-3 w-full">
            <Search className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search role, company or skill"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:opacity-90">
            Find Internships
          </button>
        </div>
      </section>

      {/* INTERNSHIP LIST */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Trending Internships</h2>
          <span className="text-sm text-muted-foreground">
            Updated daily
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InternshipCard
            title="Frontend Developer Intern"
            company="TechNova"
            location="Remote"
            duration="3 Months"
            mode="Paid"
          />

          <InternshipCard
            title="Data Analyst Intern"
            company="Insight Labs"
            location="Bangalore"
            duration="6 Months"
            mode="Hybrid"
          />

          <InternshipCard
            title="UI/UX Design Intern"
            company="Designify"
            location="Pune"
            duration="3 Months"
            mode="Remote"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Laptop className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Hands-On Experience?
          </h3>
          <p className="text-muted-foreground mb-8">
            Create your profile and apply to internships that match your skills.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90">
            Create Profile
          </button>
        </div>
      </section>

    </div>
  )
}

/* STAT CARD */
function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 text-center shadow-md">
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  )
}

/* INTERNSHIP CARD */
function InternshipCard({
  title,
  company,
  location,
  duration,
  mode,
}: {
  title: string
  company: string
  location: string
  duration: string
  mode: string
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition">
      <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
        {mode}
      </span>

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{company}</p>

      <div className="space-y-2 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
      </div>

      <button className="w-full border border-primary text-primary py-2 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition">
        View Details
      </button>
    </div>
  )
}
