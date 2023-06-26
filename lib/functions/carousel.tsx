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
      className="my-10 h-[600px] flex"
      indicators
    >
      {statements.map((statement, idx) => (
        <Carousel.Item key={idx} className="flex flex-col">
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
            <div className="flex items-center justify-center">
              <div className="flex flex-row">
                <div className="flex">
                  <Image src={Person} alt="Person" width={300} height={150} />
                </div>
                <div className="flex flex-col justify-center text-left ml-[70px]">
                  <p
                    className="text-goodpro text-[50px] font-extrabold w-[600px]"
                    style={{ fontWeight: "1000px" }}
                  >
                    {"“" + statement.statement + "”"}
                  </p>
                  <p className="text-carrois text-3xl">
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
