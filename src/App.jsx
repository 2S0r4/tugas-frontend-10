import { useState } from "react";
import products from "../data/data.js";

function ProductCard({ product, category }) {
  return (
    <div
      className={`outline outline-black/20 p-5 flex flex-col gap-2 rounded-md`}
    >
      <p
        className={`${
          category == "sport" ? "text-green-900 bg-green-800/10" : ""
        } ${category == "gadget" ? "text-blue-400 bg-blue-300/10" : ""} ${
          category == "jewelry" ? "text-yellow-600 bg-yellow-500/10" : ""
        } ${
          category == "fashion" ? "text-purple-600 bg-purple-500/10" : ""
        } w-fit px-3 py-1 rounded-full`}
      >
        {category}
      </p>
      <h1 className="text-2xl">{product}</h1>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");

  const filteredItems = products.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex justify-center font-[inter]">
      <div className="max-w-[1000px] w-full my-5 flex flex-col items-center gap-5">
        <input
          style={{ transition: "all 0.3s ease-in-out" }}
          className={`w-full outline outline-black rounded-md py-2 px-3 focus:outline-orange-300 max-w-[700px]`}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for products..."
        />
        {filteredItems.length === 0 ? (
          <h1 className="text-4xl font-bold mt-20">Product not found</h1>
        ) : (
          <section className="grid grid-cols-2 gap-5 w-full">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                product={item.product}
                category={item.category}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
