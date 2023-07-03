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
    <div className="menu-parallelogram flex mt-[70px]">
      <div className="flex skew-x-[20deg] text-goodpro gap-[90px] margin justify-center items-center text-white">
        <h2
          className={`font-bold text-3xl cursor-pointer ${
            activeCategory === "ALL" || activeCategory === null
              ? "text-yellow-500 underline underline-offset-4"
              : ""
          }`}
          onClick={() => handleClick("ALL")}
        >
          ALL
        </h2>
        {Object.keys(menuData).map((category, index) => (
          <div key={index} className="cursor-pointer">
            <h2
              className={`font-bold text-3xl ${
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
