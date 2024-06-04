import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-[#F2F1EF] px-4 flex flex-col gap-10"
        >
          <Link href="/">
            <Image src="/logo.png" width={150} height={150} alt="Brian Suyi" />
          </Link>

          {/* navbar links  */}
          <div>
            {navLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);
              return (
                <Link
                  href={item.route}
                  id={item.label}
                  className={cn("sidebar-link", {
                    "bg-active": isActive,
                  })}
                >
                  <p className={cn({ "!text-white": isActive })}>
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* navbar social links  */}
          <div className="flex gap-5 justify-center">
            {socialLinks.map((item) => {
              return (
                <Link href={item.route} target="_blank">
                  <Image
                    src={item.imgURL}
                    width={30}
                    height={30}
                    alt="social links"
                    className=""
                  />
                </Link>
              );
            })}
          </div>

          {/* cv button  */}
          <Link
            href="https://drive.google.com/file/d/1Xph308Dqg3UKDc5QyqS-u0GV5h-XWIwT/view?usp=sharing"
            target="_blank"
            className="font-semibold text-basecolor border-2 py-2 px-3 border-basecolor text-center"
          >
            View Resume
          </Link>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
