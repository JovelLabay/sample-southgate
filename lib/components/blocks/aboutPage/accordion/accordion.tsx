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
    <div className="flex flex-col margin justify-center items-center margin-y gap-5">
      {accordionData.map((data, index) => (
        <AccordionCard
          key={index}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </div>
  );
}
