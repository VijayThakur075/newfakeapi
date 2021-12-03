import React from 'react'
import { Link } from 'react-router-dom';

export default function dashboard() {
    return (
        <div>
          <h1>  welcome to dashbboard</h1>
          <Link to="/products">products</Link><br />
          <Link to="/locations">locations</Link><br />
          <Link to="/families">families</Link><br />
          <Link to="/transactions">transaction</Link>
        </div>
    )
}
