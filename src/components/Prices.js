import React from "react";

const Prices = () => {
  return (
    <div className="Prices-body">
      <h1>Prices list</h1>
      <div>
        <table>
          <thead>
            <th>Prices</th>
            <th>Section</th>
            <th>Time to respond</th>
          </thead>
          <tbody>
            <tr>
              <td>3Euros</td>
              <td align="center">Restaurant</td>
              <td align="center">3days</td>
            </tr>
            <tr>
              <td>4Euros</td>
              <td align="center">Theme park</td>
              <td align="center">2days</td>
            </tr>
            <tr>
              <td>6Euros</td>
              <td align="center">Hotels</td>
              <td align="center">1days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prices;
