import React from "react";
import Link from "next/link";

interface SearchBarProps {
  keyword: string;
  keywordChange: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, keywordChange }) => {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={(e) => keywordChange(e.target.value)}
          value={keyword}
          className="form-control"
          placeholder="Cari Poke...."
        />
        <button
          className="btn btn-md btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Cari
        </button>
        <div className="btn-group">
          <button className="btn btn-secondary btn-md rounded-0" type="button">
            Kategori
          </button>
          <button
            type="button"
            className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link href="/">
                <p className="dropdown-item">Semua Kategori</p>
              </Link>
            </li>
            <li>
              <Link href="/kategori/1">
                <p className="dropdown-item">Water</p>
              </Link>
            </li>
            <li>
              <Link href="/kategori/2">
                <p className="dropdown-item">Fire</p>
              </Link>
            </li>
            <li>
              <Link href="/kategori/3">
                <p className="dropdown-item">Grass</p>
              </Link>
            </li>
            <li>
              <Link href="/kategori/4">
                <p className="dropdown-item">Bug</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
