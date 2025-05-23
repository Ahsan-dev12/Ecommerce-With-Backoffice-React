import React, { useContext } from "react";
import { APIsDataContext } from "../../Context/ProviderAPIsData";
import { FaStar } from "react-icons/fa6";
import Header from '../../ReusableComponent/UserComp/Header'
import FooterComp from "../../ReusableComponent/UserComp/FooterComp";
function Product() {
  const { APIproducts } = useContext(APIsDataContext);
  return (
    <>
    <Header />
      <div className="font-black text-2xl pt-7 text-[#F24D2B] pb-6 text-center">
        All Product List
      </div>

      <div className="flex gap-8 mx-10 my-5 flex-wrap">
        {APIproducts.map((item) => (
          <div
            key={item.id}
            className="w-[280px] flex flex-col justify-center items-center p-3 mt-6 rounded-[10px] shadow-lg shadow-[#202020] bg-[#1C1C1C] cursor-pointer"
          >
            <img
              src="https://media.istockphoto.com/id/1081589832/photo/coming-soon.jpg?s=2048x2048&w=is&k=20&c=Bw5wfHFwNsCM2ki6UNw8ztYQteNMT36j2cUpSyPH750="
              className="w-[190px] h-[190px] rounded-full border border-[#353535]"
              alt="product"
            />

            <h1 className="text-white">{item.name}</h1>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xs text-yellow-500" />
              ))}
            </div>

            <p className="text-sm py-2 text-white">Price : {item.price} Rs</p>

            <button className="bg-[#F24D2B] text-white py-2 px-5 mt-5 rounded-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <FooterComp />
    </>
  );
}

export default Product;
