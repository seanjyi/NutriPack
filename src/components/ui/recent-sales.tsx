import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Dinner today</p>
          <p className="text-sm text-muted-foreground">
            33g protein, 51g carbs, 23g fats
          </p>
        </div>
        <div className="ml-auto font-medium">850 cal</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lunch today</p>
          <p className="text-sm text-muted-foreground">23g protein, 45g carbs, 20g fats</p>
        </div>
        <div className="ml-auto font-medium">730 cal</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Breakfast today</p>
          <p className="text-sm text-muted-foreground">
            24g protein, 38 carbs, 16g fats
          </p>
        </div>
        <div className="ml-auto font-medium">550 cal</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Dinner yesterday</p>
          <p className="text-sm text-muted-foreground">
            30g protein, 55g carbs, 27g fats
          </p>
        </div>
        <div className="ml-auto font-medium">780 cal</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lunch yesterday</p>
          <p className="text-sm text-muted-foreground">
            40g protein, 62g carbs, 12g fats
          </p>
        </div>
        <div className="ml-auto font-medium">690 cal</div>
      </div>
    </div>
  )
}
