//src/components/Sidebar.jsx
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Inicio",
            icon: <FaTh />
        },
        {
            path: "/perfil",
            name: "Perfil",
            icon: <FaUserAlt />
        },
        {
            path: "/informacion",
            name: "Informacion",
            icon: <FaRegChartBar />
        },
        // {
        //     path: "/comment",
        //     name: "Comment",
        //     icon: <FaCommentAlt />
        // },
        // {
        //     path: "/product",
        //     name: "Product",
        //     icon: <FaShoppingBag />
        // },
        // {
        //     path: "/productList",
        //     name: "Product List",
        //     icon: <FaThList />
        // }
    ];

    const MenuItem = ({ item }) => (
        <NavLink to={item.path} key={item.path} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
        </NavLink>
    );

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    {isOpen && (
                        <div className="logo">
                            <img src="/logo_vortex.png" alt="Alvaro" />
                            <br></br>
                            <div className='name'>
                                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">VortexBird</h1>                                
                            </div>
                        </div>
                    )}

                    <div style={{ marginLeft: isOpen ? "5px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item) => (
                        <MenuItem item={item} key={item.path} />
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;