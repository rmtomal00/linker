import React from 'react';
import '../css/components/Table.css'

const Table = ({ data }) => {
  // Get the keys for the table headers
  const headers = Object.keys(data[0]);

  const handleClick = (item) => {
    console.log('Clicked item:', item);
    // Handle the click event here (e.g., navigate, open a modal, etc.)
  };

  return (
    <table border="1">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>See More</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, subIndex) => (
              <td key={subIndex}>{row[header]}</td>
            ))}
            <td><button onClick={() => handleClick()}>Click Me</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table