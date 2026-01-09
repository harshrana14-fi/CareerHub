import { GraduationCap, IndianRupee, Calendar, Search, Sparkles } from "lucide-react"

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Scholarships That Power Your Dreams
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover financial support opportunities that help you focus on learning, not worrying.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard title="100+" subtitle="Active Scholarships" />
          <StatCard title="₹50L+" subtitle="Funds Available" />
          <StatCard title="Pan India" subtitle="Coverage" />
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-card rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-3 w-full">
            <Search className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by scholarship name or category"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:opacity-90">
            Search
          </button>
        </div>
      </section>

      {/* SCHOLARSHIP LISTINGS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Featured Scholarships</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ScholarshipCard
            title="Merit Excellence Scholarship"
            amount="₹1,00,000"
            deadline="30 June 2026"
            category="Merit-Based"
          />
          <ScholarshipCard
            title="Women in Tech Grant"
            amount="₹75,000"
            deadline="15 July 2026"
            category="Women Empowerment"
          />
          <ScholarshipCard
            title="Need-Based Education Aid"
            amount="₹50,000"
            deadline="10 August 2026"
            category="Need-Based"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold mb-4">
            Don’t Miss Any Opportunity
          </h3>
          <p className="text-muted-foreground mb-8">
            Create your profile and get notified about scholarships you qualify for.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90">
            Get Scholarship Alerts
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

/* SCHOLARSHIP CARD */
function ScholarshipCard({
  title,
  amount,
  deadline,
  category,
}: {
  title: string
  amount: string
  deadline: string
  category: string
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition">
      <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
        {category}
      </span>

      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="space-y-2 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
          <IndianRupee className="w-4 h-4" />
          {amount}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Deadline: {deadline}
        </div>
      </div>

      <button className="w-full border border-primary text-primary py-2 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition">
        View Details
      </button>
    </div>
  )
}
