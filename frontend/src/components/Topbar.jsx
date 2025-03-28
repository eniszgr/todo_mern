import React from "react";

function Topbar() {
  return (
    <div className="topbar">
      <h3 className="mark">ToDo App</h3>
      <div className="searchEngine">
        <input type="text" />
      </div>
      <button className="addButton"></button>
    </div>
  );
}

export default Topbar;
