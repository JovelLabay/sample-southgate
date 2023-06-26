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
    <Carousel activeIndex={index} onSelect={handleSelect} className="my-10">
      {statements.map((statement, idx) => (
        <Carousel.Item key={idx}>
          <div className="w-full">
            <div className="juliana-overlay"></div>
            <Image
              src={MikeBird}
              alt="Slide"
              width={1000}
              height={400}
              className="w-full h-[600px]"
            />
          </div>
          <Carousel.Caption>
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col">
                <Image src={Person} alt="Person" width={400} height={150} />
              </div>
              <div className="flex flex-col justify-left text-left ml-5">
                <p className="text-goodpro text-5xl font-bold w-[500px]">
                  {"”" + statement.statement + "”"}
                </p>
                <p className="text-carrois text-2xl">
                  {"- " +
                    statement.name +
                    ", " +
                    statement.company +
                    " | " +
                    statement.title}
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
