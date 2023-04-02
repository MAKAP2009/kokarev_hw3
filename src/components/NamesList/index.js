import React from "react";

const NamesList = () => {
  const names = ["Алиса", "Влад", "Максим", "Юлия", "Николай", "Влад"];
  const uniqueNames = [...new Set(names)];

  return (
    <div>
      <h3>Names List:</h3>
      <ul>
        {uniqueNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
