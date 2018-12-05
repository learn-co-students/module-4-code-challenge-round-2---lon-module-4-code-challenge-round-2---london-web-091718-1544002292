import React, {Component} from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
      transactionList: transactions,
      searchTerm: ''
    }

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactionList => this.setState({transactionList}))
  }

  handleChange = (event) => {
    const input = event.target.value
    this.setState({
      searchTerm: input
    })
  }

  filterTrans = (transactions) => {
    return transactions.filter(t =>
      t.description.includes(this.state.searchTerm)
    )
  }

  render() {
    const trans = this.filterTrans(this.state.transactionList)
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList trans={trans} />
      </div>
    )
  }
}

export default AccountContainer
