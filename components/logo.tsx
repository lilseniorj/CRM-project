import Link from "next/link"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjkyoKurSpwDHdcA1_FTLJWcU0_qG8N7csIbaQStOHQZ-9svJBzIT_oMLUMTsYygUmvc&usqp=CAU"
          alt="Logo"
          height={30}
          width={30}
        /> */}
        <p className={cn(
          "text-lg text-neutral-700 pb-1",
          headingFont.className,
        )}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
