/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import { Orbitron } from 'next/font/google'

// const orbitron = Orbitron({ subsets: ['latin'] })

const missionData = [
  {
    title: "Design",
    content:
      "Unique, sustainable environments through smart, tailored solutions—where nature thrives and communities flourish. From landscaping roots in 2000 to multidimensional innovation, we blend technology with sustainable practices to set trends that matter",
  },
  {
    title: "Elevate",
    content:
      "We elevate our legacy of excellence by exceeding expectations. Through teamwork and unwavering commitment, we deliver adaptable designs that grow with your needs, ensuring every project reflects quality, care, and forward-thinking solutions",
  },
  {
    title: "Inspire",
    content:
      "We inspire our team’s potential through development and skill-building, ensuring every client benefits from sharper expertise and deeper care. By investing in people, we invest in your experience.",
  },
];

const Team = [
  {
    name: "DR. Youssef badr Eldin",
    title: "Founder and co-Founder ",
    image: "/youssef.jpeg",
  },
  {
    name: "Dr. Eslam Nasser Bayoumi ",
    title: "Co-founder  ",
    image: "/eslam.jpeg",
  },
  {
    name: "Eng/ Ahmed Nazmi ",
    title: "General manager  ",
    image: "/nazmi.jpeg",
  },
  {
    name: "DR. Moaz samy ",
    title: "Public relations manager",
    image: "/moazz.jpeg",
  },
];
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#004d40] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pexels-pixabay-247599.jpg?height=1080&width=1920"
          alt="Futuristic Landscape"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-50"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse">
            Shaping Tomorrow's Landscapes
          </h1>
          <p className="text-xl md:text-2xl bg-[#004d40]/60 backdrop-blur-sm rounded-full px-6 py-2 border-2 border-yellow-400">
            Innovating since 2000
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] ">
        <div className="container mx-auto px-4">
          <h2
            className={` text-4xl font-bold mb-8 text-Gold-light text-center`}
          >
            Our Mission
          </h2>
          <div className="flex flex-col gap-5 px-4 sm:px-12">
            {missionData.map((mission, index) => {
              const isEven = index % 2 === 0; // Alternate layout for each card

              return (
                <div
                  key={mission.title}
                  className="group p-6 rounded-2xl bg-[#00695c]/50 backdrop-blur-sm border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-300"
                >
                  <div
                    className={`flex flex-col sm:flex-row items-start gap-12 sm:gap-8 ${
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Image Section (50% Width) */}
                    <div className="w-full sm:w-1/2 max-h-[300px] min-h-[300px]">
                      <Image
                        src="/potflower.jpg?height=400&width=600"
                        width={300}
                        height={300}
                        className="rounded-xl object-cover w-full h-full max-h-[300px]"
                        alt={mission.title}
                      />
                    </div>

                    {/* Text Section (50% Width) */}
                    <div className="w-full sm:w-1/2">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {mission.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {mission.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] ">
        <div className="container mx-auto px-4">
          <h2
            className={` text-4xl font-bold mb-8 text-Gold-light text-center`}
          >
            Our Vision
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-white">
            By designing green spaces that listen to both people and the planet,
            we unite smart solutions with sustainable practices. Through
            adaptable designs and thoughtful care, we craft landscapes that grow
            with communities—ensuring beauty, innovation, and nature thrive
            together.
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] w-full relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gold-light text-center">
            A Word from Our CEO
          </h2>

          <div className="relative flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
            {/* Blockquote */}
            <blockquote className="text-lg italic text-white relative z-10 text-center">
              "At I Green, we believe landscaping is more than just design—it’s
              about creating smart, sustainable spaces that enhance everyday
              living and bring joy. With over 20 years of experience, we blend
              innovation and customization to unite nature and technology.
              Whether it’s a small garden or a large-scale project, our
              commitment remains the same: precision, quality, and care in every
              detail. Thank you for trusting us to bring your outdoor vision to
              life."
              <footer className="mt-4 text-gold font-semibold">
                - ENG/ Essam Badr Eldin
              </footer>
            </blockquote>

            {/* Image positioned slightly below and to the right */}
            <div className="absolute right-0 md:right-[-30px] top-[80%] md:top-[90%] w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
              <Image
                src="/pexels-amie-roussel-1990939723-28965893.jpg"
                alt="Portrait of Jane Doe, CEO of our company"
                fill
                className="rounded-full border-4 border-gold object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-[#004d40] to-[#00251a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-Gold-light text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Team.map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border-l-4 border-gold bg-white/10 rounded-lg shadow-lg"
              >
                <Image
                  src={member.image}
                  alt={`${member.name} image`}
                  width={200}
                  height={200}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
