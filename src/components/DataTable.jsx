import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig !== null) {
      if (typeof a[sortConfig.key] === "number") {
        return sortConfig.direction === "ascending"
          ? a[sortConfig.key] - b[sortConfig.key]
          : b[sortConfig.key] - a[sortConfig.key];
      }
      return 0;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>
              <button onClick={() => requestSort(key)}>{key}</button>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableRows = () => {
    return (
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index} style={{ color: "white" }}>
            {Object.keys(item).map((key) => (
              <td key={key} style={{ color: "white" }}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table>
      {renderTableHeader()}
      {renderTableRows()}
    </table>
  );
};

export default DataTable;
