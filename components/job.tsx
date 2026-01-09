export default function JobsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Jobs</h1>
      <p className="text-muted-foreground mb-10">
        Discover job opportunities that match your skills and career goals.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Verified Job Listings</h3>
          <p className="text-sm text-muted-foreground">
            Browse jobs posted by trusted companies across various domains.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold mb-2">Smart Job Matching</h3>
          <p className="text-sm text-muted-foreground">
            Get job recommendations based on your profile and interests.
          </p>
        </div>
      </div>
    </div>
  )
}
