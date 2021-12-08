import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { requestProduct } from '../thunk/productrequest'
import { setPage } from '../action'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Products() {
    const product = useSelector(state => state.productuser.products.product)
    const filters = useSelector(state => state.productuser.products.filters)
    const dispatch = useDispatch()

    const handleChangeLimit = (event) => {
        const { name, value } = event.target;
        dispatch(setPage({ [name]: value }))
    }

    const handlePageChange = (acc) => {
        dispatch(setPage({ page: acc + filters.page }));
    };


    useEffect(() => {
        const getProductPerpage = () => {
            dispatch(requestProduct(filters))
        }
        getProductPerpage()
    }, [filters.limit, filters.page])

    return (
        <div>
            <h1>hello products</h1>
            <Table striped bordered hover size="sm" className="container" variant="dark">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                {product.map((item) => (
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>

            <select value={filters.limit} name="limit" onChange={handleChangeLimit}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            
            <Button variant="success" disabled={filters.page === 1} onClick={() => handlePageChange(-1)}>Prev</Button>{ " "}
            <Button variant="secondary" disabled={filters.page === filters.pages} onClick={() => handlePageChange(1)}>Next</Button>
        </div>
    )
}
