import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Action() {
  return (
    <div className="space-y-8 py-24">
      <div className="flex flex-wrap items-center gap-8 rounded-lg border p-8 dark:border-[#2D2D2D] lg:justify-around lg:p-12">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold">Get in touch with me</h2>
          <p>
            Feel free to react out if you&apos;re looking for a developer, have
            a question or just want to connect
          </p>
        </div>

        <Button className="dark:bg-[#2D2D2D] dark:text-white dark:hover:bg-[#2D2D2D]">
          <Link href="mailto:sakirsyarian@gmail.com" target="_blank">
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
}
