import React, { useContext } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { PRODUCTS ,GRADIENT,inr} from './dummydata'
import { storeContext } from './Context'

const Product_detail = () => {
    let {id}=  useParams()
    
    let data = PRODUCTS.find((item) => {
        return item.id == id
    })
    
    let navigate =useNavigate()
    
    let { dispatch } = useContext(storeContext)

    function fun1(){
    navigate('/')
    }
    return (
        <div className='h-full w-full flex flex-col justify-center items-center gap-8 mt-10'>
            <div className='w-2/3 flex flex-col gap-4 '>
                <button className={`rounded-2xl h-[50px] bg-gradient-to-r ${GRADIENT[data.category]} font-semibold`} onClick={()=>fun1()}>👈🏻Back to Products</button>
                <div className=' flex w-full h-[350px] border border-gray-300 rounded-3xl'>
                    <div className={`bg-gradient-to-r ${GRADIENT[data.category]} w-1/2 h-full rounded-l-3xl`}>
                        <h1 className='text-8xl h-full flex flex-col justify-center items-center'>{data.emoji}</h1>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center w-1/2'>
                        <h1 className='font-bold text-gray-400 w-8/10'>{data.category}</h1>
                        <h1 className='font-bold text-2xl w-8/10'>{data.title}</h1>
                        <h1 className='font-bold text-yellow-500 w-8/10'>⭐{data.rating}</h1>
                        <h1 className='font-bold text-2xl w-8/10'>{inr(data.price)}</h1>
                        <h1 className='text-gray-600 w-8/10'>{data.description}</h1>
                        <button className='w-8/10 h-[50px] rounded-xl bg-emerald-600 text-white font-semibold'onClick={()=>dispatch({type:"ADD",payload:Number(id)})}>+ Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Product_detail