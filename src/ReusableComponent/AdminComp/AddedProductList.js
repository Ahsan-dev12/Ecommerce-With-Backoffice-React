import React from "react";

function AddedProductList() {
  return (
    <>
      <div class="relative overflow-x-auto">

        <table class="w-full text-sm text-left rtl:text-right">

          <thead class="text-xs uppercase bg-[#F24D2B]">
            <tr>
              <th scope="col" class="px-6 py-3 rounded-s-lg">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3 rounded-e-lg">
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="shadow-[#202020] bg-[#1C1C1C]">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
           
          </tbody>

          <tfoot>
            <tr class="text-xs uppercase bg-[#F24D2B]">
              <th scope="row" class="px-6 py-3 text-base">
                Total
              </th>
              <td class="px-6 py-3">3</td>
              <td class="px-6 py-3">21,000</td>
            </tr>
          </tfoot>

        </table>

      </div>
    </>
  );
}

export default AddedProductList;
