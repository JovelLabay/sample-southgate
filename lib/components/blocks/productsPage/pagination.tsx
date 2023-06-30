import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type PaginationProps = {
  allItems: number;
  currentPage: number;
  goToPreviousPage: () => void;
  activeCategory: string;
  itemsPerPage: number;
  goToNextPage: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  allItems,
  currentPage,
  goToPreviousPage,
  activeCategory,
  itemsPerPage,
  goToNextPage,
}) => {
  return (
    <>
      {allItems / 3 > 1 ? (
        <div className="flex justify-center items-center gap-20 my-3">
          <div className="block m-20 bg-rivieraparadise">
            <button
              onClick={goToPreviousPage}
              style={{ display: currentPage > 1 ? "block" : "none" }}
            >
              <div className="text-3xl text-white m-2 block">
                <SlArrowLeft />
              </div>
            </button>
          </div>
          <div className="block">
            <h3>{currentPage}</h3>
          </div>
          <div className="block m-20 bg-rivieraparadise">
            <button
              onClick={goToNextPage}
              style={{
                display:
                  currentPage < Math.ceil(allItems / itemsPerPage)
                    ? "block"
                    : "none",
              }}
            >
              <div className="text-3xl text-white m-2">
                <SlArrowRight />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Pagination;
