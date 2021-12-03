import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestTransaction } from '../thunk/productrequest'
import { useSelector } from 'react-redux';

export default function Transactions() {
 const dispatch = useDispatch();
 const transaction = useSelector((state)=> state.transictionuser.transaction)

 useEffect(() => {
     dispatch(requestTransaction())
 }, [])

    return (
        <div>
            <h1>hello transaction</h1>
            {transaction.map((item)=>(
                <ul>
                    <li>{item.id}</li>
                    <li>{item.cost}</li>
                    <li>{item.quantity}</li>
                    <li>{item.productId}</li>
                </ul>
            ))}
        </div>
    )
}
