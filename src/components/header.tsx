import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, LogOut } from 'lucide-react'

import logoIcon from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="max-w-[1400px] mx-auto flex justify-between py-4 border-b">
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image
            className="dark:invert size-14"
            src={logoIcon}
            alt="Logo Image"
          />
          <p className="font-bold text-lg">To-Do List</p>
        </div>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center outline-none">
          <div className="flex flex-col items-end">
            <p className="text-xs font-semibold">Pedrinho</p>
            <p className="text-xs text-foreground">pedrinhofodinha@gmail.com</p>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a
              href="/api/auth/sign-out"
              className="flex gap-2 items-center text-destructive"
            >
              Log out <LogOut />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
