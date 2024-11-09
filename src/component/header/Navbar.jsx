
import { useState } from "react";
import logo from "../../assets/image/mon_logo.png";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "skills", to: "/skills" },
  { name: "project", to: "/projet" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  
  return (
    <>
     {({ open }) => 
     
    </>
  );
}
