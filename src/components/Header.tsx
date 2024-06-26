import { useState } from "react";
import navbarItems from "../data/navbarItems.json";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleDropdown, setToggleDropdown] = useState<string | null>(null);
  const handleDropdownToggle = (name: string) => {
    setToggleDropdown(toggleDropdown === name ? null : name);
  };
  return (
    <header className="flex gap-40 select-none text-white bg-blue-900 py-4 px-3 items-center font-sans ">
      <Link to="/" className="cursor-pointer text-2xl font-extrabold">
        FootyQuizMaster
      </Link>
      <nav className="cursor-pointer ">
        <ul className="flex gap-20">
          {navbarItems.map((item) => (
            <li key={item.name}>
              {item.link ? (
                <Link to={item.link}>{item.name}</Link>
              ) : (
                <span onClick={() => handleDropdownToggle(item.name)}>
                  {item.name}
                </span>
              )}
              {item.subItems && item.name === toggleDropdown && (
                <ul className="absolute">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link to={subItem.link}>{subItem.name}</Link>
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
