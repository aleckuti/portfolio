import Link from "next/link";
import React from "react";

const Banner = ({ type = "greeting", title, subtext }: BannerProps) => {
  return (
    <section className="md:h-screen bg-hero bg-cover">
      <div className="banner-item flex flex-col gap-5">
        <h1>
          <span>alec victor kuti</span> <br /> software engineer
        </h1>
        <div className="text-lg font-normal normal-case bg-[#149ddd] px-5 py-2 md:px-5 md:py-3 rounded-2xl">
          <Link href="mailto:victoroalec@gmail.com">Ask me Anything</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
