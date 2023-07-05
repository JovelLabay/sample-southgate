type MenuCategoriesProps = {
  activeCategory: string;
  handleClick: (category: string) => void;
  menuData: {
    [category: string]: {
      name: string;
      label: string;
      description: string;
      image: string;
    }[];
  };
};

const MenuCategories: React.FC<MenuCategoriesProps> = ({
  activeCategory,
  handleClick,
  menuData,
}) => {
  return (
    <div className="menu-parallelogram flex mt-[70px] items-center">
      <div className="flex sm:skew-x-[20deg] text-goodpro gap-[20px] sm:gap-[90px] margin justify-center sm:items-left sm:justify-start text-white w-full">
        <h2
          className={`font-bold text-[15px] sm:text-3xl cursor-pointer justify-center items-center ${
            activeCategory === "ALL" || activeCategory === null
              ? "text-yellow-500 underline underline-offset-4"
              : ""
          }`}
          onClick={() => handleClick("ALL")}
        >
          ALL
        </h2>
        {Object.keys(menuData).map((category, index) => (
          <div key={index} className="cursor-pointer w-auto">
            <h2
              className={`font-bold text-[15px] sm:text-3xl w-auto justify-center items-center ${
                activeCategory === category
                  ? "text-yellow-500  underline underline-offset-4"
                  : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category.toUpperCase()}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;
