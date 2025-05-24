"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="block py-2 text-lg font-medium hover:text-teal-500" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-lg font-medium hover:text-teal-500"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/parts"
            className="block py-2 text-lg font-medium hover:text-teal-500"
            onClick={() => setOpen(false)}
          >
            Parts Catalog
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-lg font-medium hover:text-teal-500"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
