import React from 'react';
import '../css/components/Table.css'

const Table = ({ data }) => {
  // Get the keys for the table headers
  const headers = Object.keys(data[0]);

  return (
    <table border="1">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, subIndex) => (
              <td key={subIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table