import { useState } from "react";
import navbarItems from "../data/navbarItems.json";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [toggleDropdown, setToggleDropdown] = useState<string | null>(null);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleDropdownToggle = (name: string) => {
    setToggleDropdown(toggleDropdown === name ? null : name);
  };
  const handleBurgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <header className="flex gap-40 select-none text-white bg-gradient-to-r from-violet-600 to-indigo-600 py-4 px-3 items-center font-sans ">
      <Link to="/" className="cursor-pointer text-2xl font-extrabold">
        FootyQuizMaster
      </Link>
      <div className="md:hidden cursor-pointer" onClick={handleBurgerToggle}>
        {isBurgerOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <nav
        className={`md:flex gap-20 font-medium ${
          isBurgerOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex gap-20 font-medium">
          {navbarItems.map((item) => (
            <li key={item.name}>
              {item.link ? (
                <Link
                  to={item.link}
                  className=" hover:duration-300 hover:opacity-75"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  className="flex gap-2 items-center justify-center hover:duration-300 hover:opacity-75"
                  onClick={() => handleDropdownToggle(item.name)}
                >
                  <span className=" hover:duration-300 hover:opacity-75">
                    {item.name}
                  </span>
                  <div className="">
                    {toggleDropdown ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
                  </div>
                </div>
              )}
              {item.subItems && item.name === toggleDropdown && (
                <ul className="absolute mt-2 flex flex-col gap-3 p-4 bg-violet-500 text-sm font-semibold w-52 z-50">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name} className="w-full">
                      <Link
                        to={subItem.link}
                        className=" hover:duration-300 hover:opacity-75 hover:pl-2 w-full "
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// export default function Header() {
//   const [toggleDropdown, setToggleDropdown] = useState<string | null>(null);
//   const [isBurgerOpen, setIsBurgerOpen] = useState(false);

//   const handleDropdownToggle = (name: string) => {
//     setToggleDropdown(toggleDropdown === name ? null : name);
//   };

//   const handleBurgerToggle = () => {
//     setIsBurgerOpen(!isBurgerOpen);
//   };

//   return (
//     <header className="flex justify-between items-center select-none text-white bg-gradient-to-r from-violet-600 to-indigo-600 py-4 px-3 font-sans">
//       <Link to="/" className="cursor-pointer text-2xl font-extrabold">
//         FootyQuizMaster
//       </Link>
//       <div className="md:hidden cursor-pointer" onClick={handleBurgerToggle}>
//         {isBurgerOpen ? <CloseIcon /> : <MenuIcon />}
//       </div>
//       <nav className={`md:flex gap-20 font-medium ${isBurgerOpen ? 'block' : 'hidden'} md:block`}>
//         <ul className={`flex flex-col md:flex-row gap-4 md:gap-20 ${isBurgerOpen ? 'absolute mt-10 left-0 w-full bg-violet-600 p-4' : ''}`}>
//           {navbarItems.map((item) => (
//             <li key={item.name} className="relative">
//               {item.link ? (
//                 <Link
//                   to={item.link}
//                   className="hover:duration-300 hover:opacity-75"
//                 >
//                   {item.name}
//                 </Link>
//               ) : (
//                 <div
//                   className="flex gap-2 items-center justify-center hover:duration-300 hover:opacity-75"
//                   onClick={() => handleDropdownToggle(item.name)}
//                 >
//                   <span className="hover:duration-300 hover:opacity-75">
//                     {item.name}
//                   </span>
//                   <div className="">
//                     {toggleDropdown === item.name ? (
//                       <ArrowDropUpIcon />
//                     ) : (
//                       <ArrowDropDownIcon />
//                     )}
//                   </div>
//                 </div>
//               )}
//               {item.subItems && item.name === toggleDropdown && (
//                 <ul className="absolute mt-2 flex flex-col gap-3 p-4 bg-violet-500 text-sm font-semibold w-52 z-50">
//                   {item.subItems.map((subItem) => (
//                     <li key={subItem.name} className="w-full">
//                       <Link
//                         to={subItem.link}
//                         className="hover:duration-300 hover:opacity-75 hover:pl-2 w-full"
//                       >
//                         {subItem.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
