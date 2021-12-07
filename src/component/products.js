import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { requestProduct } from '../thunk/productrequest'
import { setPage } from '../action'

export default function Products() {
    const product = useSelector(state => state.productuser.products.product)
    const filters = useSelector(state => state.productuser.products.filters)
    const dispatch = useDispatch()

    const handleChangeLimit = (event) => {
        const { name, value } = event.target;
        dispatch(setPage({ [name]: value }))
    }


    useEffect(() => {
        const getProductPerpage = () => {
            dispatch(requestProduct(filters))
        }
        getProductPerpage()
    }, [filters.limit, filters.page])

    return (
        <div>
            <h1>hello products</h1>

            {product.map((item) => (
                <ul>
                    <li>{item.name}</li>
                    <li>{item.id}</li>
                </ul>
            ))}

            <select value={filters.limit} name="limit" onChange={handleChangeLimit}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
        </div>
    )
}
