import { Briefcase, MapPin, Clock, Search } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Explore thousands of verified job opportunities tailored to your skills and ambitions.
          </p>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-card rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-3 w-full">
            <Search className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search job title or keyword"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-medium hover:opacity-90">
            Search Jobs
          </button>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Openings</h2>
          <span className="text-sm text-muted-foreground">
            Showing 3 featured jobs
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* JOB CARD */}
          <JobCard
            title="Frontend Developer"
            company="TechNova"
            location="Remote"
            type="Full Time"
          />

          <JobCard
            title="Backend Engineer"
            company="CodeWorks"
            location="Bangalore"
            type="Hybrid"
          />

          <JobCard
            title="UI/UX Designer"
            company="Designify"
            location="Pune"
            type="Internship"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Can’t find the right role?
          </h3>
          <p className="text-muted-foreground mb-8">
            Create your profile and get personalized job recommendations.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90">
            Create Profile
          </button>
        </div>
      </section>

    </div>
  )
}

/* JOB CARD COMPONENT */
function JobCard({
  title,
  company,
  location,
  type,
}: {
  title: string
  company: string
  location: string
  type: string
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{company}</p>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {type}
        </div>
      </div>

      <button className="w-full border border-primary text-primary py-2 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition">
        View Details
      </button>
    </div>
  )
}
