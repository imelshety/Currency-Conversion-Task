/* eslint-disable react/prop-types */

const CurrencyInput = ({amount , currency,currencies,onAmountChange,onCurrencyChange}) => {
  return (
    <>
    <input type="text" 
    className="rounded border border-danger p-1" 
    value={amount}
    onChange={(e) => onAmountChange(e.target.value)}
    />
    <select value={currency} onChange={(e)=>onCurrencyChange(e.target.value)}>
        {currencies.map((currency) =>(
            <option key={currency.id} value={currency}>{currency}</option>
        ))}
    </select>
    </>
  )
}

export default CurrencyInput