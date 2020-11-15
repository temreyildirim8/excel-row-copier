import { useState } from 'react';
import './entry.scss';

const Entry = () => {
  const [rowNumbers, setRowNumbers] = useState([1, 2, 3, 4, 5]);
  const [brackets, setBrackets] = useState({ value: "placeholder" });
  const [goToNextStep, setGoToNextStep] = useState(false);
  let rows = [];

  const increaseRows = (id) => {
    let numbersCopy = [...rowNumbers];
    numbersCopy[id] = id + 1;
    setRowNumbers(numbersCopy);
  }

  const handleChange = (id) => (event) => {
    const pastedText = event.target?.value;
    const pastedRows = pastedText.split('\n');
    for (let i = 0; i < pastedRows.length; i++) {
      pastedRows[i] = pastedRows[i].split('\t');
    }
    rows[id] = pastedRows
  };

  const handleOptionChange = (event) => {
    const value = { value: event.target?.value };
    setBrackets(value);
  }

  const submitHandler = () => {
    // for (let i = 0; i < rows.length; i++) {
    //   let row = rows[i];
    //   if (row.length) {
    //     for (let j = 0; j < row.length; j++) {
    //       let rowInner = row[j];
    //       if (rowInner.length) {
    //         for (let k = 0; k < rowInner.length; k++) {
    //           if (rowInner[k] !== "") {
    //             window.console.log('C', rowInner[k])
    //             // CONTROLS WILL BE ADDED
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    setGoToNextStep(true);
  }

  return (
    <section className="wrapper">
      <h2>Entry Page</h2>
      <div className="rows-wrapper">
        {rowNumbers.map((row, index) => (
          <div className="text-wrapper" key={index + 1}>
            <span className="row-number"> {rowNumbers[index]} </span>
            <input className="text-input" name={row[index + 1]} onChange={handleChange(index)} />
          </div>
        ))}
        <div className="button-wrapper">
          <span className="plus" onClick={() => increaseRows(rowNumbers.length)}> +add a row </span>
          <select name="brackets" className="brackets" required defaultValue={brackets} onChange={handleOptionChange}>
            <option value="placeholder" >Bracket</option>
            <option value="comma"> , </option>
            <option value="semicolon"> ; </option>
            <option value="pipe"> || </option>
            <option value="tab"> tab </option>
          </select>
          <button className="button" onClick={() => submitHandler()}>Submit</button>
        </div>
          {/* <div className="table-wraper">
            {rows.map((row, index) => (
              ROWS WILL BE ADDED HERE WITH SELECTED BRACKET
            ))}
          </div> */}
      </div>
    </section>
  );
};

export default Entry;
