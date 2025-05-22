import {
  RiGraduationCapLine,
  RiHistoryLine,
  RiHome2Fill,
  RiHome4Fill,
  RiMore2Fill,
  RiSearch2Line,
  RiShoppingBag4Line,
  RiSignalTowerLine,
} from "@remixicon/react";
import { SiLinkfire, SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import React from "react";
import {
  MdNewspaper,
  MdOutlineMovieCreation,
  MdSubscriptions,
} from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMusicalNotes, IoIosTrophy } from "react-icons/io";
import { HiMiniSignal } from "react-icons/hi2";
import { PiCoatHangerBold } from "react-icons/pi";
import {
  IoFlagOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Canvas = () => {
  return (
    <>
      <nav className="navbar navbar-dark fixed-top">
        <div className="container-fluid d-flex justify-content-lg-start">
          <div className="navb d-flex flex-wrap justify-content-between w-100 my-2">
            <div className="left">
              <button
                className="navbar-toggler"
                type="button btn btn-ptimary btn-pill"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mx-3">
                <img
                  className="img-fluid"
                  style={{ width: "100px" }}
                  src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
                  alt="youtube clone"
                />
              </a>
            </div>

            <div className="d-flex flex-wrap" role="search">
              <input
                style={{ height: "40px" }}
                className=" text-white bg-dark  border border-secondary rounded-start-pill px-4 border-end-0  text-white border"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn text-white  bg-transparent rounded-end-pill"
                type="submit"
                style={{ height: "40px" }}
              >
                <RiSearch2Line />
              </button>
            </div>
            <div className="d-flex mt-3 text-white" role="search">

              <RiMore2Fill />

              <a href="#" className="text-white text-decoration-none">
                <div className="rounded-pill border py-1 px-2">
                  <BiUserCircle /> Sign In
                </div>
              </a>

            </div>
          </div>

          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <img
                  className="img-fluid"
                  style={{ width: "100px" }}
                  src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
                  alt="youtube clone"
                />
              </a>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body z-n1 ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <RiHome4Fill className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <SiYoutubeshorts className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Shorts
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <MdSubscriptions className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Subscription
                  </a>
                </li>
                <hr />

                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <FaRegUserCircle className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    You
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <RiHistoryLine className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    History
                  </a>
                </li>
                <hr />

                <h3 className="my-1 mx-2">Explore</h3>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <SiLinkfire className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Trending
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <RiShoppingBag4Line className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Shopping
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <IoIosMusicalNotes className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Music
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <MdOutlineMovieCreation className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <HiMiniSignal className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Live
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <SiYoutubegaming className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Gaming
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <MdNewspaper className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    News
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <IoIosTrophy className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Sports
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <RiGraduationCapLine className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Courses
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <PiCoatHangerBold className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Fashion & Beauty
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <RiSignalTowerLine className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Podcast
                  </a>
                </li>
                <hr />
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <IoSettingsOutline className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Setting
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <IoFlagOutline className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Report History
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-start align-content-center my-1">
                  <IoHelpCircleOutline className="my-2 mx-2 yt-icons" />
                  <a className="nav-link active" aria-current="page" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
};
<script></script>;
export default Canvas;
