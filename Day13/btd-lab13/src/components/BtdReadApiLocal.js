import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function BtdReadApiLocal() {
    //khoi tao state
    const [btdListUser, setBtdListUser] = useState([])
    //doc du lieu tu api local va set cho btdlistUsers
    const apiUrl = "http://localhost:3001/users"
    // lay danh sach tu apiUrl
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((btdResponse) => {
                setBtdListUser(btdResponse.data)
            })
            .catch((error) => {
                console.log("Loi");
            })
    }, [])

    return (
        <div >
            <h2>Doc du lieu tu API Local</h2>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        btdListUser.map((btdItem, index) => {
                            return (
                                <tr>
                                    <td>{btdItem.fullname}</td>
                                    <td>{btdItem.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
