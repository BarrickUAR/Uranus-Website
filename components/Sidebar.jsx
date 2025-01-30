import React from "react";
import Image from "next/image";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarAndLogo">
        <div className="logoSection">
          <div className="logo">
            <Image src="/images/logo.svg" alt="Logo" width={50} height={0} />
          </div>

          <div className="logoText">
            <Image
              src="/images/logoText.svg"
              alt="Logo Text"
              width={200}
              height={0}
            />
          </div>
        </div>

        <ul>
          <li>
            <Image src="/images/home.svg" alt="Home" width={24} height={24} />{" "}
            <a href="#home">Home</a>
          </li>

          <li>
            <Image
              src="/images/marketplace.svg"
              alt="Marketplace"
              width={24}
              height={24}
            />{" "}
            <a href="#marketplace">Marketplace</a>
          </li>

          <li>
            <Image
              src="/images/community.svg"
              alt="Community"
              width={24}
              height={24}
            />{" "}
            <a href="#community">Community</a>
          </li>

          <li>
            <Image
              src="/images/account.svg"
              alt="Account"
              width={24}
              height={24}
            />{" "}
            <a href="#account">Account</a>
          </li>

          <li>
            <Image
              src="/images/contact.svg"
              alt="Contact"
              width={24}
              height={24}
            />{" "}
            <a href="#contact">Contact</a>
          </li>

          <li>
            <Image src="/images/about.svg" alt="About" width={24} height={24} />{" "}
            <a href="#about">About</a>
          </li>
        </ul>
      </div>

      <div className="loginAndRegister">
        <a href="#login">Login</a>
        <a href="#register">Register</a>
      </div>
    </div>
  );
};

export default Sidebar;
