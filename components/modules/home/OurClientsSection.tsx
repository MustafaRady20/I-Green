import Image from "next/image";
import React from "react";

interface Client {
  id: number;
  name: string;
  image: string;
}
const clients = [
  {
    id: 1,
    name: "Mike Taylor",
    image: "src/Frame 1597884294.png",
  },
  {
    id: 2,
    name: "Chris Thoma ",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Client 3",

    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Client 4",

    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Client 5",

    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Client 6",

    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Client 7",

    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Client 8",

    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Client 9",

    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Client 10",

    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Client 11",

    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "Client 12",

    image: "/placeholder.svg",
  },
  {
    id: 13,
    name: "Client 13",

    image: "/placeholder.svg",
  },
  {
    id: 14,
    name: "Client 14",

    image: "/placeholder.svg",
  },
  {
    id: 15,
    name: "Client 15",

    image: "/placeholder.svg",
  },
  {
    id: 16,
    name: "Client 16",

    image: "/placeholder.svg",
  },
  {
    id: 17,
    name: "Client 17",

    image: "/placeholder.svg",
  },
  {
    id: 18,
    name: "Client 18",

    image: "/placeholder.svg",
  },
  {
    id: 19,
    name: "Client 19",

    image: "/placeholder.svg",
  },
  {
    id: 20,
    name: "Client 20",

    image: "/placeholder.svg",
  },
  {
    id: 21,
    name: "Client 21",

    image: "/placeholder.svg",
  },
  {
    id: 22,
    name: "Client 22",

    image: "/placeholder.svg",
  },
  {
    id: 23,
    name: "Client 23",

    image: "/placeholder.svg",
  },
  {
    id: 24,
    name: "Client 24",

    image: "/placeholder.svg",
  },
  {
    id: 25,
    name: "Client 25",

    image: "/placeholder.svg",
  },
  {
    id: 26,
    name: "Client 26",

    image: "/placeholder.svg",
  },
  {
    id: 27,
    name: "Client 27",

    image: "/placeholder.svg",
  },
];
function OurClientsSection() {
  return (
    <section className="lg:h-[472px]   text-[#134A55] flex flex-col items-center lg:gap-y-11 gap-[62px] px-6 lg:px-[120px]  font-['Sono'] w-full relative   ">
      <header className="text-center   flex flex-col justify-center items-center ">
        <h2 className="lg:text-6xl text-4xl  font-medium  lg:leading-[72px]">
          our amazing clients{" "}
        </h2>
      </header>
      <article className="h-full grid grid-cols-4  justify-center items-center px-6 lg:grid-cols-7 gap-2  md:gap-4 lg:px-16 w-full">
        {clients.map((client: Client) => (
          <div
            key={client.id}
            className="flex justify-center items-center size-20"
          >
            <Image
              alt={client.name}
              src={"/image 13.png"}
              width={1920}
              height={1080}
              className="object-center object-contain size-full"
            />
          </div>
        ))}
      </article>
    </section>
  );
}

export default OurClientsSection;
