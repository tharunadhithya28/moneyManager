import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {eachitem} = this.props
    const {title, amount, type} = eachitem
    return (
      <div className="history">
        <div className="transaction-heading">
          <h1 className="each-column"> Title </h1>
          <h1 className="transaction-heading-inputs"> {title} </h1>
        </div>
        <div className="transaction-heading">
          <h1 className="each-column"> Amount </h1>
          <h1 className="transaction-heading-inputs"> {amount} </h1>
        </div>
        <div className="transaction-heading">
          <h1 className="each-column"> Type </h1>
          <h1 className="transaction-heading-inputs"> {type} </h1>
        </div>
        <div className="delete-history">
          <button className="delete-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default TransactionItem
