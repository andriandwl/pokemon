import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <header className="d-flex flex-wrap ms-4 me-4 align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <Image
          src="/International_Pokémon_logo.svg.png"
          alt="logo"
          width={125}
          height={50}
          style={{ fontWeight: "bold", color: "#90bcab" }}
        />
      </Link>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link
            href="/home"
            className="nav-link px-2"
            style={{ color: "#90bcab" }}
          >
            Home
          </Link>
        </li>
        <Link
          href={"/home"}
          className="nav-link px-2"
          style={{ color: "#90bcab" }}
        >
          Pokemon
        </Link>
        <li>
          <Link
            href="/about"
            className="nav-link px-2"
            style={{ color: "#90bcab" }}
          >
            About
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end"></div>
    </header>
  );
}

export default Navigation;
