import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Pokemon {
  name: string;
}

interface MenuDetailProps {
  pokemon: Pokemon;
}

const MenuDetail: React.FC<MenuDetailProps> = ({ pokemon }) => {
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{pokemon.name}</h3>

            <p className="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link href="/" passHref>
              <p className="stretched-link">Continue reading</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{pokemon.name}</h3>

            <p className="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link href="/" passHref>
              <p className="stretched-link">Continue reading</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
