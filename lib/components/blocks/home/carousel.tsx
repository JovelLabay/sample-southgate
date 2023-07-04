import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import MikeBird from "@/public/images/mike-bird.png";
import Person from "@/public/images/person.png";

type Props = {
  statements: Statements[];
};

type Statements = {
  image: string;
  statement: string;
  name: string;
  title: string;
  company: string;
};

export default function ControlledCarousel({ statements }: Props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="margin-y h-[600px] flex justify-center items-center"
      indicators
    >
      {statements.map((statement, idx) => (
        <Carousel.Item
          key={idx}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full flex items-center justify-center">
            <div className="juliana-overlay"></div>
            <Image
              src={MikeBird}
              alt="Slide"
              width={1000}
              height={400}
              className="w-full h-[600px]"
            />
          </div>
          <Carousel.Caption className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center">
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center w-auto sm:h-[450px]">
                  <div className="flex items-center justify-center w-full sm:h-[450px] h-fit sm:w-[300px]">
                    <Image
                      src={Person}
                      alt="Person"
                      className="h-full w-auto"
                    />
                  </div>
                </div>
                <div className="sm:flex block flex-col justify-center sm:ml-70px sm:w-[700px] w-fit">
                  <p className="text-goodpro-bold text-[25px] sm:text-[50px] flex sm:text-left w-fit sm:w-[600px] sm:justify-start  sm:ml-10">
                    {"“" + statement.statement + "”"}
                  </p>
                  <p className="text-carrois text-1xl text-center sm:justify-start sm:flex sm:ml-10 sm:text-2xl">
                    {"- " +
                      statement.name +
                      ", " +
                      statement.company +
                      " | " +
                      statement.title}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
