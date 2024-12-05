import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import NavBar from "@/components/shared/NavBar";
import FooterSection from "@/components/shared/FooterSection";
import { TopBar } from "@/components/shared/TopBar";

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

  // The `suppressHydrationWarning` attribute in <body> is used to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  // console.log(locale, 'locale ss');
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }


  // Font Family: Playfair Display (Serif)

  return (
    <html lang={locale}>
      <body
        className={` w-full max-w-[1920px] overflow-x-hidden h-full relative font-serif  bg-[#FFFFFF]   mx-auto  ${locale === "ar" ? "rtl" : "ltr"
          }`}
      >
        {/* <Providers> */}
        <NextIntlClientProvider messages={messages}>
          <TopBar />
          <NavBar />
          {props.children}
          <FooterSection />
        </NextIntlClientProvider>
        {/* </Providers> */}
      </body>
    </html>
  );
}
// 


