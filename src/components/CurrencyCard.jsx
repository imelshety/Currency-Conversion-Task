import { useState, useEffect } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

import CurrencyInput from "./CurrencyInput";
import axios from "axios";
const API_KEY = "c9feff0670ffbec5069f1f44d836ad31";
const Currency_API = `http://data.fixer.io/api/latest?access_key=${API_KEY}`
const CurrencyCard = () => {
  const [currency, setCurrency] = useState(1);
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");



  useEffect(() => {
    axios.get(Currency_API).then((res) => setCurrency(res.data.rates))
      .catch((err) => {
        console.log(err)
        setCurrency(null)
      })

  }, []);
  const handleAmountOneChange = (amountOne) => {
    setAmountTwo(amountOne * currency[currencyTwo] / currency[currencyOne]);
    setAmountOne(amountOne);
  }
  const handleAmountTwoChange = (amountTwo) => {
    setAmountOne(amountTwo * currency[currencyOne] / currency[currencyTwo]);
    setAmountTwo(amountOne);
  }
  const handleCurrencyOneChange = (currencyOne) => {
    setAmountTwo(amountOne * currency[currencyTwo] / currency[currencyOne]);
    setCurrencyOne(currencyOne);
  }
  const handleCurrencyTwoChange = (currencyTwo) => {
    setAmountOne(amountTwo * currency[currencyOne] / currency[currencyTwo]);
    setCurrencyTwo(currencyTwo);
  }
  return (
    <div className="d-flex flex-column gap-4">
      <div className="card w-25 mx-auto rounded-3 position-relative overflow-hidden" style={{ backgroundColor: "#EABF3C" }}>
        <h5 className="text-light fw-bold p-4 mb-0 " >Currency Exchanger</h5>
        <BiSolidDollarCircle style={{ color: "#F2D989",transform:"rotate(45deg)",position:"absolute" ,top:"-25px" ,right:"0"}} className="w-25 h-25" />
        <div className="card-body rounded-3 w-100 p-top-0 p-5 d-flex flex-column justify-content-around" style={{ backgroundColor: "#871E35" }}>
          <label htmlFor="#" className="text-light ms-1">Amount</label>
          <input type="number" placeholder="Enter Amount" className="rounded border border-danger p-1" />
          <div className="d-flex justify-content-center gap-4">
            <div className="d-flex flex-column w-50">
              <label htmlFor="" className="text-light">From</label>
              <CurrencyInput
                amount={amountOne}
                currency={currencyOne}
                currencies={Object.keys(currency)}
                onAmountChange={handleAmountOneChange}
                onCurrencyChange={handleCurrencyOneChange}
              />
            </div>
            <div className="d-flex flex-column w-50">
              <label htmlFor="" className="text-light">to</label>
              <CurrencyInput
                amount={amountTwo}
                currency={currencyTwo}
                currencies={Object.keys(currency)}
                onAmountChange={handleAmountTwoChange}
                onCurrencyChange={handleCurrencyTwoChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card w-25 mx-auto rounded-3 position-relative overflow-hidden" style={{ backgroundColor: "#EABF3C" }}>
        <h5 className="text-light fw-bold p-4 mb-0 " >Most Popular Currencies</h5>
        <BiSolidDollarCircle style={{ color: "#F2D989",transform:"rotate(45deg)",position:"absolute" ,top:"-25px",right:"0" }} className="w-25 h-25" />
        <div className="card-body rounded-3 w-100 p-top-0 p-5 d-flex flex-column justify-content-around" style={{ backgroundColor: "#871E35" }}>
          <div className="d-flex gap-4 justify-content-center align-items-center rounded-2 p-4 fw-bold" style={{ backgroundColor: "#DBBCC2" }}>
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <p>{amountOne}</p>
              <p >{currencyOne}</p>
            </div>
          <div className="d-flex flex-column justify-content-center align-items-center p gap-1">
          <FaLongArrowAltRight className="fs-4" style={{ color: "#41BB74" }} />
         <span className="fs-6">Just Now</span>
          </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <p>{amountTwo}</p>
              <p>{currencyTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyCard