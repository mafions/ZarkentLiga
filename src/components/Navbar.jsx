import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbarjon">
      <div className="navbar_layer"></div>
      <nav className="p-5  shadow md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center">
          <div className="Nav_image">
            <img src="https://www.pinclipart.com/picdir/big/209-2095185_champions-league-logo-champions-league-football-logo-clipart.png" />
            <span className="text-2xl font-Poppins cursor-pointer"> Madaniyat Ligasi </span>
          </div>
          <span
            className="text-3xl cursor-pointer mx-1 md:hidden block "
            onClick={toggleMenu}
          >
            <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
          </span>
        </div>
        <ul className={` md:flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8  ${isOpen ? "flex" : "hidden"}`}>
          <li className="mx-4 my-6 md:my-0 ">
            <Link to="/" onClick={() => setIsOpen(false)} >O'rinlar</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/fixtures" onClick={() => setIsOpen(false)} >O'yinlar</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/topurarlar" onClick={() => setIsOpen(false)}>To'purarlar</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/topurarRecord" onClick={() => setIsOpen(false)}>To'purarlarRecordlari</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;






//   // <div className="Navbarjon">
    //   <div className="navbar_layer"></div>
    //   <label tabIndex={0} className="btn btn-ghost">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M4 6h16M4 12h8m-8 6h16"
    //       />
    //     </svg>
    //   </label>
    //   <nav className="flex justify-between items-center w-[92%]  mx-auto ">
    //     <img src="./src/assets/LOGO_CHEMPIONSLEAGUE.png " className="LOGO" />
    //     <ul tabIndex={0} className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
    //       <li className="mx-4 my-6 md:my-0 ">
    //         <Link to="/" >
    //           O'rinlar
    //         </Link>
    //       </li>
    //       <li className="mx-4 my-6 md:my-0 ">
    //         <Link to="/fixtures" >
    //           O'yinlar
    //         </Link>
    //       </li>
    //       <li className="mx-4 my-6 md:my-0 ">
    //         <Link to="Jamoalar">
    //           Jamoalar
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>