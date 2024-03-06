import Link from "next/link";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="container">
      <navbar className="flex items-center justify-between py-5">
        {/* brand */}
        <Link href="/">
          <Image
            className="h-auto w-auto"
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
          />
        </Link>

        {/* menu */}
        <div className="hidden gap-8 md:flex">
          <Link href="https://github.com/sakirsyarian" target="_blank">
            github
          </Link>
          <Link href="https://instagram.com/sakirsyarian" target="_blank">
            instagram
          </Link>
          <Link href="https://facebook.com/sakirsyarian" target="_blank">
            facebook
          </Link>
          <Link href="https://twitter.com/sakirsyarian" target="_blank">
            twitter
          </Link>
        </div>

        {/* burger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <LuMenu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent className="border-none dark:bg-[#121212]">
              <SheetHeader className="mt-8 text-left">
                <SheetTitle className="mb-8">
                  <Link href="/">
                    <Image
                      className="h-auto w-auto"
                      src="/logo.png"
                      alt="logo"
                      width={70}
                      height={70}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-5 text-white">
                <Link href="https://github.com/sakirsyarian" target="_blank">
                  github
                </Link>
                <Link href="https://instagram.com/sakirsyarian" target="_blank">
                  instagram
                </Link>
                <Link href="https://facebook.com/sakirsyarian" target="_blank">
                  facebook
                </Link>
                <Link href="https://twitter.com/sakirsyarian" target="_blank">
                  twitter
                </Link>

                <Separator className="dark:bg-[#2D2D2D]" />

                <p>© {new Date().getFullYear()} sakirsyarian</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </navbar>
    </div>
  );
}
