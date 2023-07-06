import React from "react";
import AccordionCard from "./accordionCard";

export default function Accordion() {
  const accordionData = [
    {
      question: "What is your name?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Where are you from?",
      answer: "I am from Earth",
    },
    {
      question: "What is this?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more data as needed
  ];

  return (
    <div className="flex justify-center w-full items-center bg-red-500 flex-col lg:flex-row">
      <div className="lg:-rotate-90 sideways-text  justify-end md:mt-10 lg:mt-20 items-center lg:h-[500px] flex bg-blue-400 lg:ml-3 lg:-mr-5">
        <h1 className="text-goodpro-bold text-[60px]">{"FAQ's"}</h1>
      </div>
      <div className="flex flex-col margin justify-center items-center margin-y gap-5 w-[70%]">
        {accordionData.map((data, index) => (
          <AccordionCard
            key={index}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </div>
  );
}
