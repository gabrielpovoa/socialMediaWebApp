'use client'
import { useContext, useState } from "react"
import { Menu } from "./Menu"
import { Bell } from "./Bell";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const slugRoute = location.pathname.split('/');


  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);

    } else {
      setMenu(true)
    }
  }

  return <>
    <header id="header">
      <nav id="headerNav" className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-8">
          <div className="w-20 h-15">
            <img src="https://png.pngtree.com/png-clipart/20221223/original/pngtree-cartoon-lighter-png-image_8799702.png" alt="Dev" className="w-full h-full" />
          </div>
          <div className="text-3xl cursor-pointer p-3 rounded-lg" style={{ background: "#FBF9FF" }} onClick={toggleMenu}> ☰</div>
        </div>
        <div className="ml-4 font-bold text-2xl uppercase">
          {slugRoute}
        </div>


        <Bell />
      </nav>
    </header>
    {menu == true &&
      <Menu closeModal={toggleMenu} />
    }
  </>
}
