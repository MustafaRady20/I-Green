import React from "react";
import Link from "next/link";
import { Home, LayoutDashboardIcon } from "lucide-react";
import ModalProvider from "@/components/providers/ModalProvider";
import Logo from "@/components/shared/Logo";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      <main className=" relative mx-auto h-full flex flex-col text-[#134A55] max-w-[1920px] items-center justify-center bg-[#F7F2E7] ">
        <section className="min-h-screen flex flex-col  w-full    lg:px-0">
          <div className="flex flex-1   w-full overflow-hidden">
            <nav className="hidden min-w-72 text-[#134A55] font-medium min-h-screen capitalize text-lg shadow-md  bg-[#EDE0C3]  flex-col border-r  p-6 sm:flex">
              <Logo />
              <div className="mb-6 text-lg mt-6 font-semibold">Navigation</div>

              <div className="grid gap-2">
                <Link
                  href="/dashboard/"
                  className={`${`hover:`} flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground`}
                  prefetch={false}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  main
                </Link>
                <Link
                  href="/dashboard/home"
                  className={`${`hover:`} flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground`}
                  prefetch={false}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
            
              </div>
            </nav>
            {children}
          </div>
        </section>
      </main>
      {/* <Toaster /> */}
    </ModalProvider>
  );
};

export default layout;
