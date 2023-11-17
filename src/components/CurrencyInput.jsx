/* eslint-disable react/prop-types */

const CurrencyInput = ({ currency, currencies, onCurrencyChange }) => {
  return (
    <>
      <select
        style={{ backgroundColor: "#E7D2D7" }}
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency.id} value={currency}>{currency}</option>
        ))}
      </select>
    </>
  )
}

export default CurrencyInput