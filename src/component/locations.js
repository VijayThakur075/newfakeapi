import React, { useEffect } from 'react'
import { requestLocation } from '../thunk/productrequest'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


export default function Locations() {
    const selector = useSelector((state) => state.userLocation.location)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestLocation())
    }, [])

    return (
        <div>
            hello location
            {selector.map((item) => (
                <ul>
                    <li>{item.name}</li>
                    <li>{item.id}</li>
                </ul>
            ))}
        </div>
    )
}
