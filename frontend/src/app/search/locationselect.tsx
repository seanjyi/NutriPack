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

interface LocationSelectProps {
    onChange: (value: any) => void
}

export function LocationSelect(props: LocationSelectProps) {
  return (
    <div className="pr-4">
    <Select onValueChange={props.onChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Location</SelectLabel>
          <SelectItem value="fountain">Fountain</SelectItem>
          <SelectItem value="clark">Clark</SelectItem>
          <SelectItem value="case">Case</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
