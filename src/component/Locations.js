import React, { useEffect } from 'react'
import { requestLocation } from '../thunk/productrequest'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'


export default function Locations() {
    const selector = useSelector((state) => state.userLocation.location)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestLocation())
    }, [])

    return (
        <div>
            <h1> Location </h1>
            <Table striped bordered hover size="sm" className="container" variant="dark">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                {selector.map((item) => (
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    )
}
