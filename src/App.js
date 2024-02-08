// import { useEffect, useState } from 'react';
// import './App.css'


// export default function App() {
//   const [selectedValueA, setSelectedValueA] = useState('')
//   const [selectedValueB, setSelectedValueB] = useState('');
//   const [amount, setAmount] = useState("");
//   const [returnedAmount, setReturnedAmount] = useState('')


//   useEffect(function() {
// fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${selectedValueA}&to=${selectedValueB}`)
// .then((res) => res.json())
// .then((data) => setReturnedAmount(data))
//   }, [selectedValueA, selectedValueB, amount]);

//   const handleSelectChangeA = (event) => {
//     setSelectedValueA(event.target.value);
//   };

//   const handleSelectChangeB = (event) => {
//     setSelectedValueB(event.target.value);
//   };

// const handleAmountChange = (e) => {
//      setAmount(Number(e.target.value))
//   }



//   return (
//     <div>
//       <input type="text" value={amount} onChange={handleAmountChange}/>
//       <select value={amount} onChange={handleSelectChangeA}>
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <select onChange={handleSelectChangeB}>
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <p>{returnedAmount}</p>
//     </div>
//   );
// }




import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [selectedValueA, setSelectedValueA] = useState('');
  const [selectedValueB, setSelectedValueB] = useState('');
  const [amount, setAmount] = useState("");
  const [returnedAmount, setReturnedAmount] = useState('');

  useEffect(() => {
    // Check if amount is a valid number before making the API call
    if (!isNaN(amount) && amount !== "") {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${selectedValueA}&to=${selectedValueB}`)
        .then((res) => res.json())
        .then((data) => {
          // Update state with the converted amount
          setReturnedAmount(data.rates[selectedValueB]);
        })
        .catch((error) => {
          console.error('Error fetching conversion:', error);
        });
    }
  }, [selectedValueA, selectedValueB, amount]);

  const handleSelectChangeA = (event) => {
    setSelectedValueA(event.target.value);
  };

  const handleSelectChangeB = (event) => {
    setSelectedValueB(event.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  return (
    <div>
      <input type="text" value={amount} onChange={handleAmountChange} />
      <select value={selectedValueA} onChange={handleSelectChangeA}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={selectedValueB} onChange={handleSelectChangeB}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{returnedAmount}</p>
    </div>
  );
}

