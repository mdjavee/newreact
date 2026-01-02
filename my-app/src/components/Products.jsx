import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching products:', err));
    }, []);
  return (
    <>
    <div className=' pt-5'>
        <h2 className='text-xl font-extrabold  mb-4 mt-5 text-center special'>Products</h2>
    </div>
    <div className='grid grid-cols-2 pt-5 p-1 gap-2 px-1 '>
        {products.map(product => (
            <div key={product.id} className='mt-5 p-1   border-2 border-white rounded-md '>
                <img src={product.images} alt={product.title} className='object-cover' />
                <h3 className='text-[0.9rem]   font-semibold text-purple-100 mt-3 Hero p-2'>{product.title}</h3>
                <p className='p-5 font-semibold  text-emerald-100 text-md'>${product.price}</p>
            </div>
        ))}
    </div>

    </>
  )
}

export default Products