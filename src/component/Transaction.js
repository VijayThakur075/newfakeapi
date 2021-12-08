import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestTransaction } from '../thunk/productrequest'
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'

export default function Transactions() {
    const dispatch = useDispatch();
    const transaction = useSelector((state) => state.transictionuser.transaction)

    useEffect(() => {
        dispatch(requestTransaction())
    }, [])

    return (
        <div>
            <h1> Transaction</h1>
            <Table striped bordered hover size="sm" className="container" variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>cost</th>
                        <th>quantity</th>
                        <th>productId</th>
                    </tr>
                </thead>
                {transaction.map((item) => (
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.cost}</td>
                            <td>{item.quantity}</td>
                            <td>{item.productId}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    )
}
