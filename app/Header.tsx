"use client";

import MobileNav from "@/components/MobileNav";
import { navLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="hidden lg:flex items-center justify-between py-5 px-10">
        {/* logo  */}
        <Link href="/">
          <Image src="/logo.png" width={200} height={200} alt="Brian Suyi" />
        </Link>

        {/* navbar links  */}
        <div>
          {navLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                href={item.route}
                id={item.label}
                className={cn("ml-5 text-basecolor font-medium", {
                  "text-active font-semibold border-b-2": isActive,
                })}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* navbar social links  */}
        <div className="flex">
          {socialLinks.map((item) => {
            return (
              <Link href={item.route} target="_blank">
                <Image
                  src={item.imgURL}
                  width={30}
                  height={30}
                  alt="social links"
                  className="ml-2"
                />
              </Link>
            );
          })}
        </div>

        {/* cv button  */}
        <Link
          href="https://drive.google.com/file/d/1Xph308Dqg3UKDc5QyqS-u0GV5h-XWIwT/view?usp=sharing"
          target="_blank"
          className="font-semibold text-basecolor border-2 py-2 px-3 rounded-xl border-basecolor"
        >
          My Resume
        </Link>
      </nav>

      {/* Mobile navbar  */}
      <div className="root-layout">
        {/* logo  */}
        <div>
          <Link href="/">
            <Image src="/logo.png" width={150} height={150} alt="Brian Suyi" />
          </Link>
        </div>
        <div>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
