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

export function LocationSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[256px]">
        <SelectValue placeholder="Select a location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Locations</SelectLabel>
          <SelectItem value="breakfast">Fountain</SelectItem>
          <SelectItem value="lunch">Case</SelectItem>
          <SelectItem value="dinner">Clark</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
