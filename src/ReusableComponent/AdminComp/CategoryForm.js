import React, { useContext, useEffect, useState } from 'react'
import { PostAPIs } from '../../Services/PostAPI';
import { APIsDataContext } from '../../Context/ProviderAPIsData';

function CategoryForm() {

  const { APIcategories } = useContext(APIsDataContext);
  const [categories, setCategories] = useState([]);
  const [addCate, setAddCate] = useState('');

  // Initialize local categories when context changes
  useEffect(() => {
    setCategories(APIcategories || []);
  }, [APIcategories]);

  function handleOnchng(e) {
    setAddCate(e.target.value);
  }

  async function handleCateForm(e) {
    e.preventDefault();

    const isDuplicate = categories.some(data => data.category === addCate);
    if (isDuplicate) {
      alert("This category is already added!");
      return;
    }

    const newCategory = {
      id: Date.now(),
      category: addCate
    }

    await PostAPIs.catePost(newCategory);
    window.location.reload();
    // Re-fetch not required here since page reloads
    setAddCate('');
   
  }

  return (
    <div className="flex flex-col justify-center items-center
        rounded-[10px] w-auto h-auto p-8 shadow-lg bg-[#2E2929]">

      <h1 className='font-bold text-2xl text-[#F24D2B]'>Add Categories</h1>

      <form onSubmit={handleCateForm} className="flex flex-col justify-center items-center">
        <input
          onChange={handleOnchng}
          value={addCate}
          name='category'
          type="text"
          required
          placeholder="Enter the Category"
          className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 mt-5 text-white placeholder-gray-300 focus:outline-none"
        />

        <button type="submit"
          className="bg-[#F24D2B] text-white py-2 px-5 my-5 rounded-full w-full">
          Add Category
        </button>
      </form>

      {/* Show category list */}
      <div>
        {categories.map(cate => (
          <p key={cate.id}>{cate.category}</p>
        ))}
      </div>
    </div>
  )
}

export default CategoryForm;
