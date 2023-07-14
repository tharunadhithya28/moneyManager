import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistoryList = []

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
    historyList: initialHistoryList,
  }

  submitForm = event => {
    event.preventDefault()
    const {
      type,
      balance,
      income,
      expenses,
      amount,
      title,
      historyList,
    } = this.state
    console.log(event.target.value)
    this.setState(prevState => ({
      balance: prevState.balance + amount,
      income: prevState.income + amount,
      title,
      type,
    }))
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      type: '',
    }))
  }

  titleInput = event => {
    this.setState({title: event.target.value})
    console.log(event.target.value)
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
    console.log(event.target.value)
  }

  typeInput = event => {
    this.setState({type: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {
      title,
      type,
      income,
      expenses,
      amount,
      historyList,
      balance,
    } = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1> Hi Richard </h1>
          <p>
            {' '}
            Welcome back to your{' '}
            <span className="money-manager"> Money Manager </span>{' '}
          </p>
        </div>
        <ul>
          <MoneyDetails
            balance={this.balance}
            income={this.income}
            expenses={this.expenses}
          />
        </ul>
        <div className="bottom-container">
          <div className="transaction">
            <h1> Add Transaction </h1>
            <form onSubmit={this.submitForm}>
              <div className="transaction-tab">
                <div className="amount-tab">
                  <label htmlFor="title"> TTTLE </label>
                  <input
                    value={title}
                    id="title"
                    onChange={this.titleInput}
                    placeholder="TITLE"
                  />
                </div>
                <div className="amount-tab">
                  <label htmlFor="income"> AMOUNT </label>
                  <input
                    value={amount}
                    id="income"
                    onChange={this.amountChange}
                    placeholder="AMOUNT"
                  />
                </div>
                <div className="amount-tab">
                  <label htmlFor="expense"> TYPE </label>
                  <select onChange={this.typeInput} id="expense" value={type}>
                    {transactionTypeOptions.map(eachitem => (
                      <option> {eachitem.displayText} </option>
                    ))}
                  </select>
                </div>
                <button type="submit"> Add </button>
              </div>
            </form>
          </div>
          <div className="history-container">
            <h1> History </h1>
            <div>
              {historyList.map(eachitem => (
                <TransactionItem eachitem={eachitem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
