"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, Plus } from "lucide-react"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Job {
  _id: string
  title: string
  description: string
  location: string
  type: string
  remote: boolean
  isActive: boolean
  createdAt: string
  skills: string[]
  experience: string
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs?companyId=current")
      const data = await response.json()
      
      if (response.ok) {
        setJobs(data.jobs || [])
      } else {
        setError(data.message || "Failed to fetch jobs")
      }
    } catch (err) {
      setError("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }
  }

  const deleteJob = async (jobId: string) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setJobs(jobs.filter(job => job._id !== jobId))
      } else {
        const data = await response.json()
        setError(data.message || "Failed to delete job")
      }
    } catch (err) {
      setError("Failed to delete job")
    }
  }

  const toggleJobStatus = async (jobId: string, currentStatus: boolean) => {
    try {
      const job = jobs.find(j => j._id === jobId)
      if (!job) return

      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...job,
          isActive: !currentStatus
        }),
      })

      if (response.ok) {
        setJobs(jobs.map(j => 
          j._id === jobId ? { ...j, isActive: !currentStatus } : j
        ))
      }
    } catch (err) {
      setError("Failed to update job status")
    }
  }

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading jobs...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Job Postings</h1>
          <p className="text-muted-foreground">Manage your active and inactive job listings</p>
        </div>
        <Link href="/company-dashboard/post-job">
          <Button className="bg-gradient-to-r from-primary to-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 text-sm">
          {error}
        </div>
      )}

      {jobs.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <div className="mb-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No job postings yet</h3>
              <p className="text-muted-foreground mb-6">
                Start attracting talent by posting your first job opening
              </p>
              <Link href="/company-dashboard/post-job">
                <Button>Post Your First Job</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job._id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="capitalize">{job.type}</span>
                      {job.remote && (
                        <>
                          <span>•</span>
                          <span>Remote</span>
                        </>
                      )}
                      <span>•</span>
                      <span>Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={job.isActive ? "default" : "secondary"}>
                        {job.isActive ? "Active" : "Inactive"}
                      </Badge>
                      <Badge variant="outline">{job.experience}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleJobStatus(job._id, job.isActive)}
                    >
                      {job.isActive ? "Deactivate" : "Activate"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Job Posting</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{job.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteJob(job._id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {job.description}
                </p>
                {job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 5).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.skills.length - 5} more
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}