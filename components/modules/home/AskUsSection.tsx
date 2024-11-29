import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function AskUsSection() {
  return (
    <section className=" lg:h-[645px] mx-auto px-6  lg:px-[284px] text-[#134A55] ">
      <header className="lg:text-6xl text-4xl lg:px-[378.5px] font-medium lg:leading-[72px]  text-center mb-[42px]">
        Frequently Asked Questions
      </header>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left hover:no-underline">
            How can I contact Inkyy Team?
          </AccordionTrigger>
          <AccordionContent>
            You can reach us through our contact form on our website or by
            emailing us at{" "}
            <a
              href="mailto:hello@inkyy.com"
              className="text-primary hover:underline"
            >
              hello@inkyy.com
            </a>
            . We typically respond within 24 hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left hover:no-underline">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent>
            We offer a comprehensive range of web development services including
            website design, frontend development, backend development,
            e-commerce solutions, and custom web applications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left hover:no-underline">
            Do you provide website maintenance services?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer ongoing website maintenance services including
            updates, security patches, backups, and performance optimization to
            keep your website running smoothly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left hover:no-underline">
            How long does it take to design and develop a website?
          </AccordionTrigger>
          <AccordionContent>
            The timeline varies depending on the project scope and complexity. A
            simple website might take 4-6 weeks, while more complex projects can
            take 3-6 months or more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left hover:no-underline">
            Do you require a deposit for projects?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we typically require a 50% deposit to begin work, with the
            remaining balance due upon project completion. This helps us
            allocate resources and commit fully to your project.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default AskUsSection;
