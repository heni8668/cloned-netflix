import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const TopNav = ({ isScrolled }) => {
    const navigate = useNavigate();

  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(!currentUser) navigate('/login')
  })
  return (
    <NavContainer>
      <nav className={`${isScrolled ? 'scrolled' : 'notScrolled'}`}>
        <div className="leftside">
          <div className="logo">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightside">
          <button onClick={() => signOut(firebaseAuth)}>
          <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    .notScrolled {
        display: flex;
    }
    .scrolled {
        display: flex;
        background-color: black;
    }
    nav {
        position: sticky;
        top: 0;
        height: 6rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0.4rem;
        align-items: center;
        transition: 0.3s ease-in-out;

        .leftside {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-left: 5rem;

        

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 10rem;
            height: 2rem;
        }
    }

    .links {
        display: flex;
        list-style-type: none;
        gap: 3rem;
        li {
            a {
                color: white;
                text-decoration: none;
            }
        }
    }
}
.rightside {
    display: flex;
    align-items: center;
    gap:  1rem;
    margin-right: 1rem;
    button {
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }&:focus {
        outline: none;
    } svg {
        color: white;
        font-size: 2rem;
    }
}
`;
export default TopNav;
