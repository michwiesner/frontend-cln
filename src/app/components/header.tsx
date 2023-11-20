"use client";
import Image from "next/image";
import searchIcon from "@/../public/icons/search.svg";
import favoritesIcon from "@/../public/icons/favorite.svg";
import notificationsIcon from "@/../public/icons/notifications.svg";
import faceIcon from "@/../public/icons/face.svg";
import "@/app/styles/header.css";
import { useEffect, useState } from "react";

const LogoCLN = ({ type }: { type: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height="50"
    viewBox="0 0 69 40"
  >
    <path
      fill={type === "white" ? "var(--bg-white)" : "#081FA0"}
      d="M15.626 31.005h.476l.004 2.31-5.701.011v-.388l.95-.001-.011-5.043-.95.002-.003-.403 3.801-.008.002.402-1.049.001.01 5.045h.225c1.253-.004 2.248-.356 2.246-1.687v-.24Zm7.802 1.904h.798v.386l-3.775.008v-.387l.921-.002-.631-1.236-2.46.006-.338.68c-.03.069-.084.154-.084.248.001.272.213.31.457.31l.41-.002v.387l-2.292.005-.002-.387h.19c.464-.001.682-.233.819-.51l2.429-4.931.719-.002 2.84 5.427Zm-2.89-1.618-.993-1.987h-.084l-.985 1.991 2.062-.004Zm14.486-3.854-2.358.006.002.394h.297c.463-.002.726.16.726.474l.005 2.583h-.016l-3.055-3.448-2.746.006.001.394h.162c.359 0 .728.264.729.652l.008 3.796c.001.497-.306.603-.637.604H27.85l.001.388 2.348-.005-.002-.388h-.173c-.609.002-.835-.095-.837-.563l-.008-3.748h.017l4.135 4.692.792-.003-.012-4.974c0-.212.2-.463.68-.465h.234l-.002-.395Zm6.892 5.43.785-.001v.387l-3.764.008-.001-.387.921-.002-.624-1.235-2.478.005-.327.672c-.024.072-.077.161-.077.255 0 .273.204.31.442.31h.414l.001.386-2.284.005v-.387l.194-.001c.444 0 .672-.232.808-.51l2.43-4.93.701-.001 2.859 5.427Zm-2.878-1.617-1-1.987h-.096l-.993 1.991 2.09-.004Zm7.181 1.683c-1.4.003-1.666-1.193-1.67-2.575-.003-1.438.282-2.627 1.69-2.63 1.135-.002 1.593.96 1.75 1.796h.469l-.005-2.028-.307.001c-.011.175-.056.32-.286.321-.228.001-.661-.48-1.898-.476-1.648.002-3.353 1.388-3.35 3.02.005 1.66 1.78 2.988 3.502 2.985 1.378-.003 2.425-.787 2.42-2.18h-.49c.004 1.026-.73 1.764-1.825 1.766Zm3.327-5.134.943-.002.012 5.05-.943.003.002.388 3.702-.01v-.386l-.956.002-.014-5.051.958-.002-.001-.395-3.703.01v.393Zm11.444 2.498c.003 1.704-1.763 3.028-3.476 3.03-1.719.004-3.477-1.31-3.481-3.014-.003-1.686 1.75-3.009 3.467-3.013 1.714-.004 3.486 1.31 3.49 2.997Zm-1.928.005c-.003-1.336-.187-2.621-1.56-2.616-1.35.002-1.54 1.288-1.537 2.624.003 1.338.181 2.63 1.55 2.627 1.371-.004 1.55-1.295 1.547-2.635Zm7.324-2.936v.395h.307c.461-.003.715.16.715.475l.005 2.583h-.03l-3.04-3.448-2.733.006v.393h.15c.366 0 .729.264.729.652l.01 3.797c0 .496-.301.603-.64.603H61.578v.388l2.342-.005-.002-.388-.175.001c-.592.001-.84-.094-.842-.563l-.007-3.749h.023l4.139 4.692.783-.002-.012-4.975c0-.212.202-.463.69-.465h.227v-.393l-2.357.003Z"
    ></path>
    <path
      fill={type === "white" ? "var(--bg-white)" : "var(--blue-ln)"}
      d="M9.91 18.385c-.01-3.339 1.7-5.58 5.389-5.59 1.161-.002 2.178.112 3.196.386l.005 2.382-1.19.004-.164-1.452a10.457 10.457 0 0 0-1.758-.17c-2.775.004-3.744 1.736-3.74 4.147.008 3.15 1.13 4.44 3.79 4.436.55 0 1.173-.074 1.725-.194l.23-1.451 1.204-.003-.08 2.338c-1.016.278-2.004.44-3.224.443-3.659.008-5.377-1.802-5.384-5.276ZM20.197 22.517l.871-.06-.02-9.018-1.077.003v-1.003l2.438-.166.132.116.023 10.124.959-.003.002.988-3.326.007-.002-.988ZM25.321 21.244l.02-4.24-.945.001-.004-.972 2.296-.123.13.1v4.982c.003 1.336.932 1.625 1.628 1.623.784-.001 1.409-.366 1.815-.643l.004-4.981-.959.002-.003-.974 2.31-.106.146.1-.015 6.407.959.04.003.988-2.135.107-.118-.13-.103-.727c-.754.584-1.653.962-2.553.965-1.673.005-2.472-1.01-2.476-2.42ZM34.56 23.272l-.022-9.861-1.062.003V12.41l2.426-.166.13.118.01 4.154a3.95 3.95 0 0 1 2.262-.716c2.208-.005 3.272 1.487 3.277 3.681.005 2.6-1.703 4.143-4.042 4.148-.96 0-2.05-.098-2.978-.358Zm5.453-3.642c-.003-1.626-.717-2.73-2.17-2.727-.772.003-1.395.236-1.8.513l.01 4.923c.406.115.931.216 1.526.215 1.7-.005 2.437-1.385 2.434-2.924Z"
    ></path>
    <path
      fill={type === "white" ? "var(--bg-white)" : "var(--blue-ln)"}
      d="M5.196 40a.882.882 0 0 1-.723-.38A25.103 25.103 0 0 1 .347 29.407a25.165 25.165 0 0 1 4.371-18.834 25.172 25.172 0 0 1 7.034-6.654A25.11 25.11 0 0 1 21.124.347 25.194 25.194 0 0 1 39.96 4.718a25.19 25.19 0 0 1 8.549 10.633.871.871 0 0 1-.038.767.873.873 0 0 1-.628.445.886.886 0 0 1-.96-.535 23.439 23.439 0 0 0-7.947-9.879 23.427 23.427 0 0 0-17.52-4.065 23.438 23.438 0 0 0-15.264 9.513 23.428 23.428 0 0 0-4.065 17.52 23.371 23.371 0 0 0 3.839 9.502.883.883 0 0 1-.73 1.381Z"
    ></path>
  </svg>
);

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const scroll = window.scrollY; // => scroll position
    setScrollPosition(scroll);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-100 d-flex justify-space-between align-center p-10 p-md-20 header-container ${
        scrollPosition < 600 ? "header-transparent" : "header-white"
      }`}
    >
      <div className="d-flex align-center">
        <Image
          src={`/icons/menu-${scrollPosition < 600 ? "white" : "black"}.svg`}
          width={25}
          height={25}
          className="m-r-15 pointer"
          alt="menu-icon"
        />
        <LogoCLN type={scrollPosition < 600 ? "white" : "color"} />
      </div>

      <div className="d-flex align-center d-none d-md-block">
        <input
          id="searchByName"
          type="text"
          placeholder="Busca un comercio..."
          className="search-input"
        />
        <input
          id="searchByLocation"
          type="text"
          placeholder="Ingresa una ubicación..."
          className="search-input"
        />

        <button type="button" className="pointer m-l-20 search-button">
          <Image src={searchIcon} width={17} height={17} alt="search-icon" />
        </button>
      </div>

      <div className="d-none d-md-block">
        <Image
          src={`/icons/notifications-${
            scrollPosition < 600 ? "white" : "black"
          }.svg`}
          width={30}
          height={30}
          className="m-l-10 m-lg-l-15 pointer"
          alt="notification-icon"
        />
        <Image
          src={`/icons/favorite-${
            scrollPosition < 600 ? "white" : "black"
          }.svg`}
          width={30}
          height={30}
          className="m-l-10 m-lg-l-15 pointer"
          alt="favorite-icon"
        />
        <Image
          src={`/icons/face-${scrollPosition < 600 ? "white" : "black"}.svg`}
          width={30}
          height={30}
          className="m-l-10 m-lg-l-15 pointer"
          alt="face-icon"
        />
      </div>
    </header>
  );
};
export default Header;
