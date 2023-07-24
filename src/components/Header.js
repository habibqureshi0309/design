import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../tailwind.css";
import profileImg from "../assets/profile.png";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate()

  return (
    <div className="bg-white">
      <header class="inset-x-0 top-0 z-100 header-shadow fixed top-0 left-0 z-40 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
          <nav
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a
                href="/"
                class="-m-1.5 p-1.5 text-logoColor font-bold text-logoSize"
              >
                Air Academic
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <button class="bg-logoColor mr-10 text-white font-bold py-2 px-4 rounded">
                Upgrade
              </button>
              <img
                src={profileImg}
                alt="Image"
                onClick={() => navigate('/profile')}
                class="h-250 w-250 rounded-tl rounded-br"
              />
            </div>
          </nav>
        </header>
    </div>
  );
}

export default Header;
