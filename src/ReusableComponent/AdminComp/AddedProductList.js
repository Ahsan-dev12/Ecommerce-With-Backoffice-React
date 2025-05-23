import React, { useContext } from "react";
import { APIsDataContext } from "../../Context/ProviderAPIsData";

function AddedProductList() {
  const { APIproducts } = useContext(APIsDataContext);

  return (
    <>
      <div className="font-black text-2xl py-5 text-[#F24D2B]">All Product List</div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-sm bg-[#F24D2B] text-white">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            {APIproducts.length > 0 ? (
              APIproducts.map((product, index) => (
                <tr key={index} className="bg-[#1C1C1C] text-white border-b border-gray-700">
                  <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">{product.categoryName}</td>
                  <td className="px-6 py-4">Rs. {product.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-5 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr className="text-xs bg-[#F24D2B] text-white">
              <th scope="row" className="px-6 py-3 text-2xl font-bold">
                Total Products
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3 text-2xl font-bold">{APIproducts.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default AddedProductList;
