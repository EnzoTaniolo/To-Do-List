import { Button } from '@/components/ui/button'

import { Plus } from 'lucide-react'

export function Nav() {
  return (
    <nav className="flex max-w-[1400px] mx-auto justify-between pt-20">
      <Button className="gap-2">
        NewTask
        <Plus />
      </Button>
      <div className="">
        <Button className="gap-2 mx-2">To do</Button>
        <Button className="gap-2">Already done</Button>
      </div>
    </nav>
  )
}
