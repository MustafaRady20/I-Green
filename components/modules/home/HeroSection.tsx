import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
// import { useTranslations } from 'next-intl';
// import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import React from "react";
import {
  BsFacebook,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

function HeroSection() {
  // const { locale } = params;

  // const t = useTranslations('HomePage');
  // console.log(t('title'), 'title');
  // setRequestLocale(locale);
  return (
    <main className="relative font-Sono min-h-dvh w-full overflow-hidden">
      {/* Hero Content */}
      <section className="relative flex h-dvh flex-col items-center justify-center px-4 text-center">
        <article className="absolute top-0 inset-0 w-full h-full overflow-hidden">
          <Image
            src="/clouds.jpeg"
            quality={100}
            priority
            alt="Hero Image"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 h-48 bg-gradient-to-b top-0 from-[#ebdfc4]/90 via-[#ebdfc4]/50 to-transparent" />
        </article>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/50 via-white/0 to-transparent" />

        <header className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="flex mx-auto w-full justify-center text-center gap-1">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-[7px] h-1.5 relative bg-[#134a55]"
                />
              ))}
            </p>
            <p className="text-xl text-teal-900 text-[32px] font-light font-Sono capitalize leading-10 tracking-[4px]">
              Experienced Agency
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-balance text-[90px] capitalize leading-[88px] text-5xl font-extrabold text-teal-900 md:text-6xl lg:text-7xl">
              {"Let's"} <br />
              Fulfill Your <br />
              <span className="text-[#ea5f0a]">Needs</span>
            </h1>
          </div>
          <Button
            variant={"outline"}
            className="inline-flex bg-gradient-to-l rounded-[48px] border-2 w-[300px]  h-20 border-[#134a55] backdrop-blur-[11.60px] bg-transparent px-8 py-3 text-3xl font-medium text-teal-900  hover:bg-teal-50"
          >
            Get Quote
          </Button>
        </header>

        {/* Social Icons */}
        <div className="absolute bottom-8 z-10 flex space-x-8">
          {[
            BsGlobe,
            BsTwitter,
            BsYoutube,
            BsInstagram,
            BsFacebook,
            BsLinkedin,
          ].map((Icon, index) => (
            <Link
              key={index}
              href="#"
              className="text-teal-900 hover:text-teal-700"
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
