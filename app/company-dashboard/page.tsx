"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Users, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  totalJobs: number
  activeJobs: number
  totalViews: number
  totalApplications: number
}

export default function CompanyDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalJobs: 0,
    activeJobs: 0,
    totalViews: 0,
    totalApplications: 0,
  })
  const [recentJobs, setRecentJobs] = useState([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/jobs?companyId=current")
      const data = await response.json()
      
      if (data.jobs) {
        setRecentJobs(data.jobs.slice(0, 5))
        setStats({
          totalJobs: data.jobs.length,
          activeJobs: data.jobs.filter((job: any) => job.isActive).length,
          totalViews: data.jobs.reduce((sum: number, job: any) => sum + (job.views || 0), 0),
          totalApplications: data.jobs.reduce((sum: number, job: any) => sum + (job.applications || 0), 0),
        })
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error)
    }
  }

  const statCards = [
    { title: "Total Jobs", value: stats.totalJobs, icon: Users, color: "text-blue-600" },
    { title: "Active Jobs", value: stats.activeJobs, icon: TrendingUp, color: "text-green-600" },
    { title: "Total Views", value: stats.totalViews, icon: Eye, color: "text-purple-600" },
    { title: "Applications", value: stats.totalApplications, icon: Users, color: "text-orange-600" },
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Company Dashboard</h1>
          <p className="text-muted-foreground">Manage your job postings and track performance</p>
        </div>
        <Link href="/company-dashboard/post-job">
          <Button className="bg-gradient-to-r from-primary to-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Job Postings</CardTitle>
        </CardHeader>
        <CardContent>
          {recentJobs.length > 0 ? (
            <div className="space-y-4">
              {recentJobs.map((job: any) => (
                <div key={job._id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.location} • {job.type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      job.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No job postings yet</p>
              <Link href="/company-dashboard/post-job">
                <Button>Post Your First Job</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}