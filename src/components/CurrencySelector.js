export default function CurrencySelector({ currency, setCurrency }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>Select Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}
