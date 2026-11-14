import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <h2>React tasks</h2>
      <ul>
        <li>Home</li>
        <li>Tools</li>
        <li>Config</li>
      </ul>
    </div>
  );
}
