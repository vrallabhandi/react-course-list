import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>React Router demo</h1>
      </Link>
    </div>
  );
}

export default Header;
