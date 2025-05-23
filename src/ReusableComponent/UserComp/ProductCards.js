import React, { useContext } from "react";
import { APIsDataContext } from "../../Context/ProviderAPIsData";
import { FaStar } from "react-icons/fa6";
import { ImTelegram } from "react-icons/im";

function ProductCards() {
  const { APIproducts } = useContext(APIsDataContext);
  return (
    <>
      <div className="relative h-[450px] bg-black px-4 py-8 overflow-hidden">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30 z-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1704018731159-ef9ce0a1f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="font-black text-2xl text-[#F24D2B] pb-6 text-center">
            Feature Products
          </div>

          <div className="flex justify-between mx-10 items-center gap-4 flex-wrap">
            {APIproducts.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="w-[220px] flex flex-col justify-center items-center p-3 rounded-[10px] shadow-lg shadow-[#202020] bg-[#1C1C1C] cursor-pointer"
              >
                <img
                  src="https://media.istockphoto.com/id/1081589832/photo/coming-soon.jpg?s=2048x2048&w=is&k=20&c=Bw5wfHFwNsCM2ki6UNw8ztYQteNMT36j2cUpSyPH750="
                  className="w-[90px] h-[90px] rounded-full border border-[#353535]"
                  alt="product"
                />

                <h1 className="text-white">{item.name}</h1>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs text-yellow-500" />
                  ))}
                </div>

                <p className="text-sm py-2 text-white">
                  Price : {item.price} Rs
                </p>

                <button className="bg-[#F24D2B] text-white py-2 px-5 mt-5 rounded-full">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
