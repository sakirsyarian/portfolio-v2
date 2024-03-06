import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="dark:bg-[#181818] dark:text-white">
      <div className="container">
        <div className="space-y-8 py-16">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                className="h-auto w-auto"
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* menu */}
          <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
            <Link href="https://linkedin.com/in/sakirsyarian" target="_blank">
              linkedln
            </Link>
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

          <Separator className="dark:bg-[#2D2D2D]" />

          <p className="text-center">
            © {new Date().getFullYear()} sakirsyarian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
