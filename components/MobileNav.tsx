'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Film } from 'lucide-react'
const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden'
      >
        <SheetHeader>
          <Link
            href='/'
            className='flex items-center gap-2 max-sm-gap-1'
          >
            <Film color='#2563eb' />
            <h1 className='font-semibold text-xl text-[#2563eb] capitalize '>
              prime video
            </h1>
          </Link>
        </SheetHeader>
        <div className='flex flex-col gap-4 mt-4 text-gray-400'>
          <Link
            href='/contact'
            className={`flex items-center  text-xl hover:text-primary ${
              pathname === '/home' ? 'active ' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
