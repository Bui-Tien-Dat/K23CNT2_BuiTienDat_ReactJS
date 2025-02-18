import React from 'react'

export default function BtdFunComp(props) {
  return (
    <div>
        <h2>Demo: Function Component Props</h2>
        <p>Lay du lieu tu props de hien thi</p>
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>Company: {props.company}</p>
        <p>Note: {props.note}</p>
    </div>
  )
}
