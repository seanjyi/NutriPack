import { Metadata } from "next"
import Image from "next/image"

import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"
import { DatePickerDemo } from "../../components/ui/datepicker"
import { MainNav } from "../../components/ui/main-nav"
import { CaloricIntakeBarChart } from "../../components/ui/caloricintakebarchart"
import { RecentSales } from "../../components/ui/recent-sales"
import { Search } from "../../components/ui/search"
import TeamSwitcher from "../../components/ui/team-switcher"
import { UserNav } from "../../components/ui/user-nav"
import { Dialog } from "@/components/ui/dialog"
import { AddMealDialog } from "@/components/ui/addmealdialog"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              <a className="pr-9" href="/">
                <span className="text-red-500 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                ←
                </span>
              </a>
              Welcome to your nutrition dashboard, Abel
            </h2>
            <div className="flex items-center space-x-2">
              <DatePickerDemo />
              <AddMealDialog />
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Calories
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2130</div>
                    <p className="text-xs text-muted-foreground">
                      +5.1% from yesterday
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Protein
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">80g</div>
                    <p className="text-xs text-muted-foreground">
                      +20.8% from yesterday
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Carbohydrates</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">134g</div>
                    <p className="text-xs text-muted-foreground">
                      -10.5% from yesterday
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Fats
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">59g</div>
                    <p className="text-xs text-muted-foreground">
                      -8.3% from yesterday
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                <Card className="md:col-span-2 col-span-1 lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Caloric Intake Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <CaloricIntakeBarChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-2 lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Meals</CardTitle>
                    {/* <CardDescription>
                      You made 265 sales this month.
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
          </Tabs>
        </div>
      </div>
    </>
  )
}