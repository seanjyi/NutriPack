import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MealTimeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[256px]">
        <SelectValue placeholder="Select a meal" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Meals</SelectLabel>
          <SelectItem value="breakfast">Breakfast</SelectItem>
          <SelectItem value="lunch">Lunch</SelectItem>
          <SelectItem value="dinner">Dinner</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
