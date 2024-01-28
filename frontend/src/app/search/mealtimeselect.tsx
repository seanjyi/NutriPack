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

interface MealtimeSelectProps {
    onChange: (value: any) => void
}

export function MealtimeSelect(props: MealtimeSelectProps) {
  return (
    <div className="pr-4">
    <Select onValueChange={props.onChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Meal" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Meal</SelectLabel>
          <SelectItem value="breakfast">Breakfast</SelectItem>
          <SelectItem value="lunch">Lunch</SelectItem>
          <SelectItem value="dinner">Dinner</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
