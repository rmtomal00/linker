import React from 'react';
import '../css/components/Table.css'
import { useNavigate } from 'react-router-dom';

const Table = ({ data }) => {
  // Get the keys for the table headers
  const headers = Object.keys(data[0]);

  const navigator = useNavigate()

  const handleClick = (item) => {
    //console.log('Clicked item:', item);
    navigator("/history", {state: item})

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
            <td>
              <button onClick={() => handleClick(row)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#66a2c2" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table