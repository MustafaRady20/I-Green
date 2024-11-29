/* eslint-disable react/no-unescaped-entities */
"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { ClipboardListIcon, UsersIcon } from "lucide-react"
export default function Component() {
  return (
    <div className="flex flex-col  w-full min-h-screen " role="main">
      <div className="flex-1 overflow-y-auto" role="article">
        <section className="grid gap-6  p-6 size-full sm:p-8">
          <Card className="size-full text-[#134A55]">
            <CardHeader>
              <CardTitle className="capitalize text-2xl font-medium leading-relaxed ">
                Suiiz Dashboard
              </CardTitle>
              <CardDescription>
                Welcome back, Admin! Here's a quick overview of your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-6  justify-center ">
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
