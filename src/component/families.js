import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestFamily } from '../thunk/productrequest'
import { useSelector } from 'react-redux'

export default function Families() {
    const data = useSelector(state => state.userFamily.family)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestFamily())
    }, [])
    return (
        <div>
            <h1>
                hello families
                {data.map((item) => (
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                    </ul>
                ))}
            </h1>
        </div>
    )
}
