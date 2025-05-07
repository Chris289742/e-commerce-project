import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { Dropdown } from "../components/dropdown";
import ProductItem from "../components/ProductItem";

const Shop = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [currentSort, setCurrentSort] = useState("Sort by: Relavent");

  useEffect(() => {
    const filtered = applyFilter();
    const sorted = sortProduct(filtered, currentSort);
    setFilterProducts(sorted);
  }, [category, subCategory, currentSort, search, showSearch]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    // search Products
    if (showSearch && search) {
      productsCopy = productsCopy.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    return productsCopy;
  };

  const sortProduct = (items, sortType) => {
    const sorted = [...items];
    switch (sortType) {
      case "Sort by: Low to High":
        return sorted.sort((a, b) => a.price - b.price);
      case "Sort by: High to Low":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  };

  // Dropdown call the function and passing the sort method (when it changes)
  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      <div className="min-w-60 ml-5">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
            onClick={() => setShowFilter(!showFilter)}
          />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((label) => (
              <label key={label} className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={label}
                  onChange={toggleCategory}
                />{" "}
                {label}
              </label>
            ))}
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((label) => (
              <label key={label} className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={label}
                  onChange={toggleSubCategory}
                />{" "}
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <Dropdown onChange={handleSortChange} currentSort={currentSort} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
