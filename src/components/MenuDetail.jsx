import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenuDetail({ pokemon }) {
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{pokemon.name}</h3>
            <div className="mb-1 text-muted">Height :{pokemon.height}</div>
            <p className="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link href="/" className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <Image
              src={pokemon.sprites?.front_default}
              width={300}
              height={300}
              alt="caurra"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{pokemon.name}</h3>
            <div className="mb-1 text-muted">Height :{pokemon.height}</div>
            <p className="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link href="/" className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <Image
              src={pokemon.sprites?.front_default}
              width={300}
              height={300}
              alt="caurra"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
