
import { HomeContentForm } from "@/components/modules/dashboard/home/HomeContentForm"
import React from "react"

function page() {
   
  return (
    <main className="flex flex-col w-full min-h-screen " >
      <section className="flex-1 overflow-y-auto" >
        <section className="grid gap-6 p-6 sm:p-8">
        <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <HomeContentForm />
    </div>
        </section>
      </section>
    </main>
  )
}

export default page
