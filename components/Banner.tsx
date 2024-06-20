import Link from "next/link";
import React from "react";

const Banner = ({ type = "greeting", title, subtext }: BannerProps) => {
  return (
    <section className="md:h-screen bg-hero bg-cover">
      <div className="banner-item">
        <h1>
          <span>brian suyi</span> <br /> software engineer
        </h1>
        <div className="text-lg font-medium lowercase">
        <Link href="#">Hire Me</Link>
      </div>
      </div>
    </section>
  );
};

export default Banner;
