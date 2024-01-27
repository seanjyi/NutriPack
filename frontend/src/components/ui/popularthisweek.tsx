
export function PopularThisWeek() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">French Fries</p>
          <p className="text-sm text-muted-foreground">
            Grill
          </p>
        </div>
        <div className="ml-auto font-medium">2,583 servings</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hamburger Bun</p>
          <p className="text-sm text-muted-foreground">Grill</p>
        </div>
        <div className="ml-auto font-medium">2,323 servings</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Linguine Noodles</p>
          <p className="text-sm text-muted-foreground">
            Pasta
          </p>
        </div>
        <div className="ml-auto font-medium">2,304 servings</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Traditional Cheese Pizza</p>
          <p className="text-sm text-muted-foreground">
            Pizza
          </p>
        </div>
        <div className="ml-auto font-medium">2,255 servings</div>
      </div>
      <div className="flex items-center">
        {/* <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar> */}
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Yellow Squash and Onions</p>
          <p className="text-sm text-muted-foreground">
            Simply Made
          </p>
        </div>
        <div className="ml-auto font-medium">2,249 servings</div>
      </div>
    </div>
  )
}
