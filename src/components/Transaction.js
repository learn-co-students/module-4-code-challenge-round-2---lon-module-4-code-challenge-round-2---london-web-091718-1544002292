import React from 'react'

const Transaction = (props) => {
  const {t} = props
  return (

    <tr>
      <td>{t.posted_at}</td>
      <td>{t.description}</td>
      <td>{t.category}</td>
      <td>{t.amount}</td>
    </tr>
  )
}

export default Transaction
