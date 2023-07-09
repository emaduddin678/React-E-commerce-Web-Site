import React from "react";
import NavHeader from "./nav-header/NavHeader.jsx";
import TopHeader from "./top-header/TopHeader.jsx";

function Header() {
  return (
    <header>
      <TopHeader />
      <NavHeader />
    </header>
  );
}

export default Header;
