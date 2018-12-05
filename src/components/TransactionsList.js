import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const {trans} = props
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {
          trans.map(t =>
            <Transaction key={t.id} t={t} />
            // < tr >
            //   <td>{t.posted_at}</td>
            //   <td>{t.description}</td>
            //   <td>{t.category}</td>
            //   <td>{t.amount}</td>
            // </tr>
          )
        }

      </tbody>
    </table>
  )
}

export default TransactionsList
