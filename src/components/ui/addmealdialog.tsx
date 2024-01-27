"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerDemo } from "./datepicker"
import { Select } from "./select"
import { MealTimeSelect } from "./mealtimeselect"
import { LocationSelect } from "./locationselect"

export function AddMealDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a meal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a meal</DialogTitle>
          <DialogDescription>
            Input meal information down below. Click next when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePickerDemo></DatePickerDemo>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="meal" className="text-right">
              Meal
            </Label>
            <MealTimeSelect></MealTimeSelect>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="place" className="text-right">
              Place
            </Label>
            <LocationSelect></LocationSelect>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
