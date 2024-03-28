// import React, { useState } from 'react';

// export default function AboutWS() {
//     const [isCollapsed, setIsCollapsed] = useState(true);

//     const toggleCollapse = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     return (
//         <div className=" flex flex-col">
//             <div className="w-full overflow-hidden">
//                 <div className="px-6 py-4 mx-36">
//                     <h2 className="text-2xl font-bold mb-2 capitalize">Top Grooming Essentials for Men Online by Wild Stone</h2>
//                     <p className='text-gray-600 '>Wild Stone is designed for men who are always up for adventures and make the most of every moment. Wild Stone offers grooming essentials to cater to the different needs of a modern Indian man. From exquisite fragrances for every o`ccasion to the perfect grooming kit, Wild Stone has you covered.</p>

//                     <div className={`${isCollapsed ? 'h-0 overflow-hidden' : 'h-auto'}`}>
//                         <p className='text-gray-600'>Experience the ultimate range of Wild Stone grooming products for men, where you’ll find everything from exquisite perfumes to precision shaving razors. Our collection caters to a wide range of men, from thrill-seekers who love to take on challenges for an adrenaline rush to the go-getters who need efficient and easy grooming solutions. After all, it’s your unique path which defines the “Wild” in Wild Stone.</p>

//                         <h2 className='text-2xl font-bold mb-2 capitalize'>Wild Stone Fragrances for Men</h2>
//                         <p className='text-gray-600'>Extensively known for its irresistible fragrances, Wild Stone is home to various masculine fragrances. The <a href="#" className='text-blue-500 underline'>perfumes</a> and <a href="#" className='text-blue-500 underline' >deodorants</a> offered by Wild Stone are infused with woody, spicy, and oriental notes. The hallmark of Wild Stone's product line is its signature fragrance, designed to leave a lasting impression and unforgettable sensory experience for its customers. Find your favourite Wild Stone fragrances and make them yours because…<span className='text-gray-700 font-bold'>LOG TOH NOTICE KARENGE!</span></p>

//                         <h2 className='text-2xl font-bold mb-2 capitalize'>Wild Stone Grooming Products for Men</h2>
//                         <p className='text-gray-600'>Indian men are increasingly displaying a heightened interest in personal grooming, as evidenced by their willingness to explore a wider range of grooming products for men. A prime example of this shift can be seen in the growing trend of moving away from the traditional practice of using a common family <a href="#" className='text-blue-500 underline'>soap bar</a> and instead seeking out specialised men's soaps that feature distinct masculine fragrances. Wild Stone, a leading brand in the men's grooming space, is dedicated to meeting this evolving demand by consistently offering the latest and most innovative grooming essentials for men, including a variety of <a href="#" className='text-blue-500 underline'>shaving products</a>.</p>

//                         <h2 className='text-2xl font-bold mb-2 capitalize'>Wild Stone Combos for Men</h2>
//                         <p className='text-gray-600'>Wild Stone has curated an exclusive collection of perfume and <a href="#" className='text-blue-500 underline'>grooming combos for men</a>, designed to cater to customers' preferences and bring together grooming essentials for men in a single pack. This unique offering provides our customers with the convenience of having their favourite products in one place while also benefiting from super-saving discounts.</p>
//                         <p className='text-gray-600'>We invite you to browse our collection and experience the premium quality products by <a href="#" className='text-blue-500 underline'>Wild Stone</a>. Our combos are an excellent addition to your grooming wardrobe, and we guarantee they will exceed your expectations. Don't miss out on this opportunity to elevate your grooming routine - shop now and discover the best of Wild Stone.</p>

//                         <h2 className='text-2xl font-bold mb-2 capitalize'>Gifting Wild Stone on Father’s Day</h2>
//                         <p className='text-gray-600'>Celebrate Father's Day with Wild Stone and show the most important man in your life how much you appreciate them. Fathers, the strong, supportive figures who are always there for us. It's time to put the spotlight on them and give them something special to make their day. Explore the Wild Stone collection to pick a perfume for dad with a fabulous fragrance.</p>
//                         <p className='text-gray-600'>If you’re checking out <a href="#" className='text-blue-500 underline'>father’s day gifts</a> then the Wild Stone Grooming Kit 101 is the perfect gift to put an end to your search. This ultimate combination of daily essentials for men includes a sleek pouch to carry all the shaving essentials like a razor, shaving cream, after shave, soap, and more. Plus, it comes inside a ready-to-gift box, making it an effortless and appropriate choice for Father's Day. </p>
//                         <p className='text-gray-600'>Not only will your father appreciate the convenience of having all his grooming essentials organised in one place, but the quality of the products is top notch. So, whether your dad is a seasoned pro at grooming or just starting out, this kit is sure to make him feel special and appreciated on Father's Day.</p>
//                     </div>
//                 </div>
//                 <div className="px-6 py-4">
//                     <button
//                         onClick={toggleCollapse}
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     >
//                         {isCollapsed ? 'Show More' : 'Show Less'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';

export default function AboutWS() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="w-full overflow-hidden">
                <div className="px-6 py-4 mx-36">
                    <h2 className="text-2xl font-bold mb-2 capitalize my-10">Top Grooming Essentials for Men Online by Wild Stone</h2>
                    <p className='text-gray-600 leading-7 my-5'>Wild Stone is designed for men who are always up for adventures and make the most of every moment. Wild Stone offers grooming essentials to cater to the different needs of a modern Indian man. From exquisite fragrances for every o`ccasion to the perfect grooming kit, Wild Stone has you covered.</p>

                    <div className={`${isCollapsed ? 'h-0 overflow-hidden' : 'h-auto'}`}>
                        <p className='text-gray-600 leading-7 my-5'>Experience the ultimate range of Wild Stone grooming products for men, where you’ll find everything from exquisite perfumes to precision shaving razors. Our collection caters to a wide range of men, from thrill-seekers who love to take on challenges for an adrenaline rush to the go-getters who need efficient and easy grooming solutions. After all, it’s your unique path which defines the “Wild” in Wild Stone.</p>

                        <h2 className='text-2xl font-bold mb-2 capitalize my-10'>Wild Stone Fragrances for Men</h2>
                        <p className='text-gray-600 leading-7 my-5'>Extensively known for its irresistible fragrances, Wild Stone is home to various masculine fragrances. The <a href="#" className='text-blue-500 underline'>perfumes</a> and <a href="#" className='text-blue-500 underline' >deodorants</a> offered by Wild Stone are infused with woody, spicy, and oriental notes. The hallmark of Wild Stone's product line is its signature fragrance, designed to leave a lasting impression and unforgettable sensory experience for its customers. Find your favourite Wild Stone fragrances and make them yours because…<span className='text-gray-700 font-bold'>LOG TOH NOTICE KARENGE!</span></p>

                        <h2 className='text-2xl font-bold mb-2 capitalize my-10'>Wild Stone Grooming Products for Men</h2>
                        <p className='text-gray-600 leading-7 my-5'>Indian men are increasingly displaying a heightened interest in personal grooming, as evidenced by their willingness to explore a wider range of grooming products for men. A prime example of this shift can be seen in the growing trend of moving away from the traditional practice of using a common family <a href="#" className='text-blue-500 underline'>soap bar</a> and instead seeking out specialised men's soaps that feature distinct masculine fragrances. Wild Stone, a leading brand in the men's grooming space, is dedicated to meeting this evolving demand by consistently offering the latest and most innovative grooming essentials for men, including a variety of <a href="#" className='text-blue-500 underline'>shaving products</a>.</p>

                        <h2 className='text-2xl font-bold mb-2 capitalize my-10'>Wild Stone Combos for Men</h2>
                        <p className='text-gray-600 leading-7 my-5'>Wild Stone has curated an exclusive collection of perfume and <a href="#" className='text-blue-500 underline'>grooming combos for men</a>, designed to cater to customers' preferences and bring together grooming essentials for men in a single pack. This unique offering provides our customers with the convenience of having their favourite products in one place while also benefiting from super-saving discounts.</p>
                        <p className='text-gray-600 leading-7 my-5'>We invite you to browse our collection and experience the premium quality products by <a href="#" className='text-blue-500 underline'>Wild Stone</a>. Our combos are an excellent addition to your grooming wardrobe, and we guarantee they will exceed your expectations. Don't miss out on this opportunity to elevate your grooming routine - shop now and discover the best of Wild Stone.</p>

                        <h2 className='text-2xl font-bold mb-2 capitalize my-10'>Gifting Wild Stone on Father’s Day</h2>
                        <p className='text-gray-600 leading-7 my-5'>Celebrate Father's Day with Wild Stone and show the most important man in your life how much you appreciate them. Fathers, the strong, supportive figures who are always there for us. It's time to put the spotlight on them and give them something special to make their day. Explore the Wild Stone collection to pick a perfume for dad with a fabulous fragrance.</p>
                        <p className='text-gray-600 leading-7 my-5'>If you’re checking out <a href="#" className='text-blue-500 underline'>father’s day gifts</a> then the Wild Stone Grooming Kit 101 is the perfect gift to put an end to your search. This ultimate combination of daily essentials for men includes a sleek pouch to carry all the shaving essentials like a razor, shaving cream, after shave, soap, and more. Plus, it comes inside a ready-to-gift box, making it an effortless and appropriate choice for Father's Day. </p>
                        <p className='text-gray-600 leading-7 my-5'>Not only will your father appreciate the convenience of having all his grooming essentials organised in one place, but the quality of the products is top notch. So, whether your dad is a seasoned pro at grooming or just starting out, this kit is sure to make him feel special and appreciated on Father's Day.</p>
                    </div>
                    <div className="py-4 flex justify-end">
                        <span
                            onClick={toggleCollapse}
                            className="cursor-pointer font-bold text-sm"
                        >
                            {isCollapsed ? 'Show More' : 'Show Less'}
                        </span>
                    </div>
                </div>

            </div>
        
    );
}
