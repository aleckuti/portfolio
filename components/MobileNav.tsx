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
        <SheetContent side="left" className="border-none bg-[#F2F1EF] px-4 flex flex-col gap-10">
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
                  className={cn("flex flex-col mb-2 text-basecolor font-medium", {
                    "text-active font-semibold underline": isActive,
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
                    className="mr-2"
                  />
                </Link>
              );
            })}
          </div>

          {/* cv button  */}
          <Link
            href="https://drive.google.com/file/d/1Xph308Dqg3UKDc5QyqS-u0GV5h-XWIwT/view?usp=sharing"
            target="_blank"
            className="font-semibold text-basecolor border-2 py-2 px-3 rounded-xl border-basecolor text-center"
          >
            My Resume
          </Link>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
