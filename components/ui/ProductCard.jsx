import Image from 'next/image'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import Rating from 'react-rating'
import { ButtonPrimary } from './ButtonPrimary'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <div className=' border border-slate-50 hover:shadow-lg hover:-translate-y-1 delay-150 duration-300 hover:scale-105 transition ease-in-out rounded-xl p-6 flex flex-col md:flex-row gap-4'>
        <div>
            <Image src='/Images/image0_0.jpg' alt='product' width={300}  height={300} className=' rounded-xl'/>
        </div>

        <div className='flex flex-col gap-2'>
            <h2 className=' font-semibold text-lg'>Product Title</h2>
            <h3 className=' font-medium text-2xl' >R 1000</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, odio ad molestias cupiditate repudiandae, earum libero temporibus porro perferendis dolor, reiciendis laudantium recusandae eius voluptates corporis. Ipsam, adipisci. Totam, nobis!
            </p>
            <Rating emptySymbol={<FaRegStar size={25} />} fullSymbol={<FaStar size={25}/>} />
            <div className=''>
                <ButtonPrimary title={"Add To Cart"} icon={<FaShoppingCart/>} />
            </div>
            
        </div>

    </div>
  )
}

export default ProductCard