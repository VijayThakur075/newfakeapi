import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { requestProduct } from '../thunk/productrequest'

export default function Products() {
const product = useSelector(state => state.productuser.product)
const dispatch =useDispatch()

    useEffect(() => {
      dispatch(requestProduct())
    }, [])

    return (
        <div>
            <h1>hello products</h1>
           
            {product.map((item) =>(
                 <ul>
                <li>{item.name}</li>
                <li>{item.id}</li>
                </ul>
            ))}
            
        </div>
    )
}
