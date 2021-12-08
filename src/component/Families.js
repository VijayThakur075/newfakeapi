import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestFamily } from '../thunk/productrequest'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'

export default function Families() {
    const data = useSelector(state => state.userFamily.family)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestFamily())
    }, [])
    return (
        <div>
            <h1>Families </h1>
            <Table striped bordered hover size="sm" className="container" variant="dark">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                {data.map((item) => (
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    </tbody>

                    // <ul>
                    //     <li>{item.id}</li>
                    //     <li>{item.name}</li>
                    // </ul>
                ))}
            </Table>

        </div>
    )
}
