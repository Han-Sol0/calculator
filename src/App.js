import './App.css';
import { useState } from 'react';

function App() {

  
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operators = ['+', '-', '=', 'C',]

  const [operator, setOperator] = useState('')
  const [number1, setNumber1] = useState('0')
  const [number2, setNumber2] = useState('')
  const [result, setResult] = useState(false)
 
  const [total, setTotal] = useState(number1 + operator + number2)



  const handleClick = (val) => {
    if (number1 === "0") {
      setNumber1(val)
    } else if (operator) {
      setNumber2((prev) => {
        return prev + val
      })
    } else {
      setNumber1((prev) => prev + val)
    }
  }

  
  const handleOperation = (op) => {
    if (op === 'C') {
      setNumber1('0')
      setNumber2('')
      setOperator('')
      setTotal('0')
      setResult(false)
    } else if (op === '=') {
      setResult(true)
      if (operator === '+') {
        setTotal(String(Number(number1) + Number(number2)))
      } else {
        setTotal(String(Number(number1) - Number(number2)))
      }
    } else {
      setOperator(op)
    }

  }
  
  return (
    <div className="calculator ">
      {numbers.map((item, ind) => (
          <button key={ind} onClick={() => handleClick(item)}  >
            <div >
              {item}
            </div>
          </button>))}
      {operators.map((act) => (
        <button key={act} style={{ border: '1px solid red' }} onClick={() => handleOperation(act)}  >
          {act}
        </button>))}
      <div className={result ? "red" : 'black'} >
        {total}
      </div>
    </div>
  );
}

export default App;


