import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import { FaTumblrSquare } from 'react-icons/fa'

function AboutIntroduction() {
      
 



  return (
    <section className=" mx-auto lg:px-[120px] px-6 py-28 ">
      <div className="flex flex-col gap-7 lg:flex-row mt-10 justify-between ">
        <div className="lg:w-1/2 flex flex-col gap-10">
          <header>
            <h4 className="text-[#134A55] text-3xl md:text-4xl capitalize font-bold">
              introduction
            </h4>
            <div className=" w-[239px] h-1 bg-[#134A55] mt-2" />
          </header>
          <p className="text-[#134A55] text-base md:text-lg">
            Welcome to suiiz media! We are not just another design agency –
            we are creative minds who love and live design in every form.
            We are all about ideas that inspire and designs that get to the
            point. We firmly believe that design should be more than just
            aesthetics – it should tell stories, evoke emotions and bring
            brands to life. At suiiz media, we combine artistic talent with
            strategic thinking to give your projects that special something.
          </p>
        </div>
        <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
          <Accordion
            className=""
            type="single"
            defaultValue="item-1"
            collapsible
          >
            {[1, 2, 3, 4].map((i) => (
              <AccordionItem
                key={i}
                className="border my-3 bg-[#FCFAF6] rounded-xl py-3 px-4 md:py-5 md:px-10"
                value={`item-${i}`}
              >
                <AccordionTrigger
                  icon={<FaTumblrSquare />}
                  className="text-base md:text-lg text-[#134A55]"
                >
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#134A55]">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default AboutIntroduction