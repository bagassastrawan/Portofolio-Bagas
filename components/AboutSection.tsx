import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Figma" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-3xl font-bold mb-6 md:text-left mt-5">
              Bagus Sastrawan
            </h1>
            <p className="text-xl">Denpasar, 18 Mei 2006 </p>
            <br />
            <p className="text-xl">
              Hi, Allow me to introduce myself. My name is Putu Bagus Sastrawan,
              but most people call me Bagus. I reside in Teuku Umar Barat, and
              currently pursuing my education at SMKN 1 Denpasar, majoring in
              Software Engineering. Presently, I am primarily focused on website
              design development and I aspire to work part-time as a Graphic
              Designer.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-3xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-950 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/profile-1.png"
              alt=""
              width={300}
              height={300}
              className="hidden md:block "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
