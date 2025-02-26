import Link from "./Link";

import React from 'react'

function Sidebar() {

    const links = [
        { to: "/accordion", label: "Accordion" },
        { to: "/dropdown", label: "Dropdown" },
        { to: "/button", label: "Button" },
        { to: "/modal", label: "Modal" },
        { to: "/table", label: "Table" },
      ];
    
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col flex-wrap align-start items-start pl-4 pt-4">

        {links.map((link) => (
                <Link
                key={link.to}
                to={link.to}
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                >
                {link.label}
                </Link>
            ))}
    </div>
  )
}

export default Sidebar