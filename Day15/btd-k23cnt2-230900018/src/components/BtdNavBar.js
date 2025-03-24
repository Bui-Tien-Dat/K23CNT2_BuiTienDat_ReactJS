import React from 'react'
import {Link} from 'react-router-dom'
import BtdHome from './BtdHome'

export default function BtdNavBar() {
  return (
    <div>
        <nav>
            <Link to='/' element={<BtdHome />}>Home</Link> |
            <Link to='/btd-list-user' element={''}>List User</Link> |
            <Link to='/btd-create-user' element={''}>Create User</Link>

        </nav>
    </div>
  )
}
