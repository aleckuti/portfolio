import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="pt-10 md:pt-10 md:pb-20">
      <div className="md:flex items-center justify-between md:mx-10 lg:mx-20">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <div className="flex flex-col items-center font-semibold md:font-bold text-[20px] md:items-start md:text-[30px] lg:text-[50px]">
            <h1>HI, I'M BRIAN.</h1>
            <h1 className="flex items-center">
              <span>A SOFTWARE&nbsp;</span>
              <span>
                <Image
                  src="/icon2.png"
                  width={20}
                  height={20}
                  alt="icon"
                  className="md:w-[25px] lg:w-[40px]"
                />
              </span>
              <span>&nbsp;ENGINEER</span>
            </h1>
            <h1>BASED IN LAGOS</h1>
          </div>

          <div className="hidden md:flex items-center font-mono md:text-[20px] lg:text-[30px]">
            <h3>FRONTEND&nbsp;</h3>
            <span>
              <Image
                src="/icon2.png"
                width={15}
                height={15}
                alt="icon"
                className="md:w-[15px] lg:w-[20px]"
              />
            </span>
            <h3>&nbsp;BACKEND&nbsp;</h3>
            <span>
              <Image
                src="/icon2.png"
                width={15}
                height={15}
                alt="icon"
                className="md:w-[15px] lg:w-[20px]"
              />
            </span>
            <h3>&nbsp;DESIGN</h3>
          </div>

          <div className="hidden md:flex gap-5 text-base font-medium">
            <Link
              href="#"
              className="bg-black text-white py-2 px-5 hover:bg-basecolor hover:transition"
            >
              Ask me Anything
            </Link>
            <Link href="#" className="border-2 py-2 px-5">
              View Projects
            </Link>
          </div>

          {/* Mobile Call to Action  */}
          <div className="flex flex-col md:hidden items-center gap-2 font-medium text-base font-sans">
            <span className="">Got a Project?</span>
            <div className="bg-black px-16 py-2 text-white hover:bg-basecolor hover:transition">
              <Link href="#">Ask me Anything</Link>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/img2.png"
            width={400}
            height={400}
            alt="Brian"
            className="hidden lg:w-[450px] md:w-[300px] md:flex"
          />
          <Image src="/img.png" width={500} height={500} alt="Brian" className="bg-cover md:hidden mt-5" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
