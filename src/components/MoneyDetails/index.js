import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balance, income, expenses} = this.props
    return (
      <div className="moneyDetails-container">
        <li className="moneyDetails">
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div>
            <p> Your Balance </p>
            <h1> Rs {balance} </h1>
          </div>
        </li>
        <li className="moneyDetails">
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div>
            <p> Your Income </p>
            <h1> Rs {income}</h1>
          </div>
        </li>
        <li className="moneyDetails">
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div>
            <p> Your Expenses </p>
            <h1> Rs {expenses} </h1>
          </div>
        </li>
      </div>
    )
  }
}
export default MoneyDetails
