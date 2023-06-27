import React, { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

interface AccordionCardProps {
  question: string;
  answer: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setIsClicked(false);
    } else {
      setIsExpanded(true);
      setIsClicked(true);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mb-5">
      <div
        className="faq-parallelogram bg-rivieraparadise cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="skew-x-[20deg]">
          <div className="flex flex-row m-10 text-goodpro text-3xl text-white">
            <div
              className={`w-[100%] text-[36px] text-goodpro ${
                isClicked ? "text-demonicyellow" : ""
              }`}
            >
              {question.toUpperCase()}
            </div>

            <div className="mt-1 justify-end w-[100%] flex">
              {isExpanded ? <SlArrowDown /> : <SlArrowRight />}
            </div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="faq-details mt-3 text-carrois text-[30px] ml-10">
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
