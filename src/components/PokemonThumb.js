import React from "react";
import Link from "next/link";
import Image from "next/image";

const PokemonThumb = ({ id, image, name, type, _callback }) => {
  const style = type + " thumb-container";
  return (
    <div className="col-lg-3">
      <div className={style}>
        <div className="card p-3 mb-2">
          <Link
            href={`/detailPoke/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon bg-transparent">
                  <Image src={image} alt="poke" height={300} width={300} />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">{name}</h3>
              <div className="mt-5">
                <div className="mt-3">
                  <span className="text1">#{id}</span>
                  <div className="bg-transparent">
                    <span>{type}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <img src={image} alt={name} />
      <div classNameName="detail-wrapper">
        <h3>{name}</h3>
        <div classNameName="number">
          <small>{id}</small>
        </div>
        <small>Type: {type}</small>
      </div> */}
    </div>
  );
};

export default PokemonThumb;
