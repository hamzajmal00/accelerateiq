import React, { useEffect, useState } from "react";
import Dashboard from "../../pages/Dashboard";
import WhatSee from "./Process/WhatSee";
import WhatHappened from "./Process/WhatHappened";
import Schedule1 from "./Process/Schedule1";
import Schedule2 from "./Process/Schedule2";
import Schedule3 from "./Process/Schedule3";
import Schedule4 from "./Process/Schedule4";
import Email1 from "./Process/Email1";
import Email2 from "./Process/Email2";
import Email3 from "./Process/Email3";
import Referral from "./Process/Referral";
import Referral2 from "./Process/Referral2";
import Referral3 from "./Process/Referral3";
import Referral4 from "./Process/Referral4";
import { Referral5 } from "./Process/Referral5";
import Referral6 from "./Process/Referral6";
import Hungup from "./Process/Hungup";
import NotInterested from "./Process/NotInterested";
import Discard from "./Process/Discard";
import wave from "../../assets/img/wave.gif";
import BasicModal from "../Common/BasicModel";
import ManagerDashboard from "../../pages/CallerDashboard";
import * as XLSX from "xlsx";
import { Swiper, SwiperSlide } from "swiper/react";
import yourFile from "../../assets/Demo.xlsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
const CallProcessing = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const handleHungUp = () => {
    setIndex(15);
    handleClose4();
  };

  const [formObj, setFormObj] = useState({
    name: "John Jacobs",
    title: "Senior Sales Manager",
    phone: "(949) 293-0707",
    time: "EST",
    email: "johnjacobs@business.com",
  });

  useEffect(() => {
    if (index == 14) {
      setFormObj({
        name: "John Jacobs",
        title: "Senior Sales Manager",
        phone: "(949) 293-0707",
        time: "EST",
        email: "johnjacobs@business.com",
      });
    }
  }, [index]);

  const { showWave } = useSelector((state) => {
    return state.helper;
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(yourFile); // Fetch is not needed when using import
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
          type: "array",
        });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const headers = jsonData[0];
        const records = jsonData.slice(1).map((row) => {
          const record = {};
          headers.forEach((header, index) => {
            record[header] = row[index];
          });
          return record;
        });

        setData(records);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    };

    fetchData();
  }, []);

  function displayFormattedDate(elementId) {
    const dateElement = document.getElementById(elementId);

    if (dateElement) {
      const currentDate = new Date();
      const options = { weekday: "long", month: "long", day: "numeric" };
      const formattedDate = currentDate.toLocaleDateString("en-US", options);
      dateElement.innerHTML = formattedDate;
    }
  }

  function displayFormattedTime(elementId) {
    const timeElement = document.getElementById(elementId);

    if (timeElement) {
      const currentTime = new Date();

      const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });

      timeElement.innerHTML = formattedTime;
    }
  }

  useEffect(() => {
    // Your function to be executed
    const yourFunction = () => {
      displayFormattedDate("currentDate");

      displayFormattedTime("currentTime");
    };

    // Set interval to execute your function every one minute (60000 milliseconds)
    const intervalId = setInterval(yourFunction, 60000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    displayFormattedDate("currentDate");

    displayFormattedTime("currentTime");
  }, []);

  const [formObjContact , setFormObjContact] = useState({
    company:"Lexis Nexis",
    contact:"Andrea Parks",
    title:"Vice President, Sales Operations",
    industry:"Technology",
    time:'EST',
    address:"2450 E Brown St",
    city:"Tampa",
    state:"FL"

  })

  const handleChangeContact = (e) =>{
    const {name,value}  = e.target
      console.log(name)
      console.log(value)
    setFormObjContact({...formObjContact,[name]:value})
  }
  return (
    <ManagerDashboard>
      {" "}
      <div class="flex flex-wrap items-start justify-between gap-4">
        {/* <!--  --> */}
        <div class="">
          <div class="flex flex-wrap gap-x-10 gap-y-2">
            <h2
              id="currentDate"
              class="text-2xl font-medium lg:text-3xl 2xl:text-4xl"
            >
              Wednesday, September 25
            </h2>
            <h2
              id="currentTime"
              class="text-2xl font-medium lg:text-3xl 2xl:text-4xl"
            >
              9:05 AM
            </h2>
          </div>
          <ul class="mt-4 flex flex-wrap items-center gap-3 md:gap-6">
            <li class="text-sm font-medium">
              Campaign:
              <span class="text-blue-600"> IQ1 Leads </span>
            </li>
            <li class="text-sm font-medium">
              Call Category:
              <span class="text-blue-600"> Initial Reach </span>
            </li>
            <li class="text-sm font-medium">
              Lead ID:
              <span class="text-blue-600"> 1463 </span>
            </li>
            <li class="text-sm font-medium">
              Last Dialed:
              <span class="text-blue-600"> 1 week ago </span>
            </li>
          </ul>
        </div>

        {/* <!-- Buttons --> */}
        <div class="flex items-center gap-4">
          <button
            onClick={handleOpen2}
            data-hs-overlay="#search-modal"
            class="inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26.03 26.03"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path d="M2 11a9 9 0 0 1 15.39-6.34A9 9 0 1 1 2 11Zm23.74 13.32-6.26-6.26a11 11 0 1 0-1.42 1.42l6.26 6.26a1 1 0 0 0 .32.21A1.09 1.09 0 0 0 25 26a1 1 0 0 0 .38-.08.9.9 0 0 0 .54-.54A1 1 0 0 0 26 25a1.09 1.09 0 0 0-.08-.39 1 1 0 0 0-.18-.29Z" />
            </svg>
          </button>
          <button
            onClick={handleOpen3}
            data-hs-overlay="#call-notes-modal"
            class="inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path d="M17 17v3.59L20.59 17ZM2 22h13v-6a1 1 0 0 1 1-1h6V2H2ZM24 2v13.59a2 2 0 0 1-.15.76 1.92 1.92 0 0 1-.44.65L17 23.41a2 2 0 0 1-.65.44 2 2 0 0 1-.76.15H2a2 2 0 0 1-1.41-.59A2 2 0 0 1 0 22V2A2 2 0 0 1 .59.59 2 2 0 0 1 2 0h20a2 2 0 0 1 1.41.59A2 2 0 0 1 24 2ZM12 15H8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-4-2h8a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
            </svg>
          </button>
          <button
            onClick={handleOpen4}
            data-hs-overlay="#discard-modal"
            class="inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 20"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path d="m25.71 7.71-6 6A1 1 0 0 1 18 13a1 1 0 0 1 .29-.71L22.59 8H13A11 11 0 0 0 2 19a1 1 0 0 1-.29.71A1 1 0 0 1 1 20a1 1 0 0 1-.71-.29A1 1 0 0 1 0 19 13 13 0 0 1 13 6h9.59l-4.3-4.29a1 1 0 0 1-.21-.33A1 1 0 0 1 18 1a1 1 0 0 1 .08-.38 1.15 1.15 0 0 1 .21-.33A1 1 0 0 1 19 0a1 1 0 0 1 .38.08 1.15 1.15 0 0 1 .33.21l6 6a1.15 1.15 0 0 1 .21.33.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* <!--  --> */}
      <div class="mt-10 grid flex-1 grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-10 ">
        <div class="rounded-2xl bg-secondary/10 p-6 lg:p-10 relative">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
            <div class="relative flex items-center gap-2 before:absolute before:-bottom-[13px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
              <span class="rounded-lg bg-accent-1 p-1 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path d="M14.69 14.05a6.91 6.91 0 0 0-3.12-2.48A4.23 4.23 0 0 0 13 9.47a4.15 4.15 0 1 0-8 0 4.23 4.23 0 0 0 1.42 2.1 6.91 6.91 0 0 0-3.12 2.48 7.62 7.62 0 1 1 11.38 0ZM6.23 8.31a2.78 2.78 0 0 1 1.71-2.56 2.74 2.74 0 0 1 1.6-.16 2.78 2.78 0 0 1 2.18 2.18A2.78 2.78 0 0 1 9 11.08a2.77 2.77 0 0 1-2.77-2.77ZM4.33 15a5.55 5.55 0 0 1 9.34 0 7.58 7.58 0 0 1-9.34 0ZM9 0a9 9 0 1 0 6.36 2.64A9 9 0 0 0 9 0Z" />
                </svg>
              </span>
              <h6 class="text-lg font-medium">Contact Information</h6>
            </div>

            <div class="">
              <button
                onClick={handleOpen}
                data-hs-overlay="#edit-contact-modal"
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  class="h-4 w-4"
                >
                  <path d="m14.4 7.62-4-4 2.16-2.16 4 4Zm-8.94 8.94h-4v-4l7.9-7.94 4 4ZM17.58 4.44l-4-4a1.6 1.6 0 0 0-.47-.31 1.5 1.5 0 0 0-.57-.13 1.46 1.46 0 0 0-.54.11 1.38 1.38 0 0 0-.47.31L.42 11.52a1.38 1.38 0 0 0-.31.48 1.46 1.46 0 0 0-.11.55v4A1.43 1.43 0 0 0 1.44 18h4a1.46 1.46 0 0 0 .56-.11 1.38 1.38 0 0 0 .47-.31l11.1-11.1a1.38 1.38 0 0 0 .32-.48 1.46 1.46 0 0 0 .11-.54 1.5 1.5 0 0 0-.11-.55 1.6 1.6 0 0 0-.31-.47Z" />
                </svg>
              </button>
            </div>
          </div>

          <div class="mt-4">
            <Swiper
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper contact"
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            >
              {Array(1)
                .fill(0)
                .map(() => {
                  return (
                    <SwiperSlide>
                      <form action="" class="px-4">
                        <div class="flex items-center justify-end">
                          <button class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="h-5 w-5"
                            >
                              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                            </svg>
                          </button>
                          <button class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              fill="currentColor"
                              class="h-6 w-6"
                            >
                              <path d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5Zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5Zm2.938 1.719a1.719 1.719 0 1 0 0 3.437 1.719 1.719 0 0 0 0-3.437Zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5ZM9 13.5V23h2.969v-9.5Z" />
                            </svg>
                          </button>
                          <button class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="h-5 w-5"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                            </svg>
                          </button>
                        </div>

                        <div class="space-y-4">
                          <div class="relative">
                            <input
                              type="text"
                              id="company-name"
                              class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                              placeholder="Company Name"
                              value="Lexis Nexis"
                              readonly
                            />
                            <label
                              for="company-name"
                              class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Company Name
                            </label>
                          </div>

                          <div class="relative">
                            <input
                              type="text"
                              id="contact-name"
                              class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                              placeholder="Contact Name"
                              value="Andrea Parks"
                              readonly
                            />
                            <label
                              for="contact-name"
                              class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Contact Name
                            </label>
                          </div>

                          <div class="relative">
                            <input
                              type="text"
                              id="title"
                              class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                              placeholder="Title"
                              value="Vice President, Sales Operations"
                              readonly
                            />
                            <label
                              for="title"
                              class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Title
                            </label>
                          </div>

                          <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
                            <div class="relative">
                              <input
                                type="text"
                                id="industry"
                                class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                placeholder="Industry"
                                value="Technology"
                                readonly
                              />
                              <label
                                for="industry"
                                class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Industry
                              </label>
                            </div>

                            <div class="relative">
                              <input
                                type="text"
                                id="timezone"
                                class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                placeholder="Time Zone"
                                value="EST"
                                readonly
                              />
                              <label
                                for="timezone"
                                class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Time Zone
                              </label>
                            </div>
                          </div>

                          <div class="grid grid-cols-1 gap-4 xl:grid-cols-3">
                            <div class="relative">
                              <input
                                type="text"
                                id="address"
                                class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                placeholder="Contact Address"
                                value="2450 E Brown St"
                                readonly
                              />
                              <label
                                for="address"
                                class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                Contact Address
                              </label>
                            </div>

                            <div class="relative">
                              <input
                                type="text"
                                id="city"
                                class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                placeholder="City"
                                value="Tampa"
                                readonly
                              />
                              <label
                                for="city"
                                class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                City
                              </label>
                            </div>

                            <div class="relative">
                              <input
                                type="text"
                                id="state"
                                class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                placeholder="State"
                                value="FL"
                                readonly
                              />
                              <label
                                for="state"
                                class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                              >
                                State
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </SwiperSlide>
                  );
                })}
              {/* <div className="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4DA3E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>

              <div className="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4DA3E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div> */}
            </Swiper>
          </div>
        </div>

        <div class="flex flex-col rounded-2xl bg-secondary/10 p-6 lg:p-10">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
            <div class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
              <span class="rounded-lg bg-accent-1 p-1 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 15"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path d="M16.24 13.62a.68.68 0 0 1-.37.07.74.74 0 0 1-.36-.12A11.27 11.27 0 0 0 9 11.74a11.27 11.27 0 0 0-6.51 1.83.74.74 0 0 1-.36.12.68.68 0 0 1-.37-.07.65.65 0 0 1-.28-.24.67.67 0 0 1-.1-.34v-2.27a13.82 13.82 0 0 1 15.24 0V13a.67.67 0 0 1-.1.34.65.65 0 0 1-.28.28ZM7.43 1.46a13.1 13.1 0 0 0-2.5 6.26A15 15 0 0 0 1.38 9.2v-.72A7 7 0 0 1 3.09 4a7.68 7.68 0 0 1 4.34-2.54ZM9 1.65a12.06 12.06 0 0 1 2.63 5.75 15.48 15.48 0 0 0-5.26 0A12.1 12.1 0 0 1 9 1.65Zm7.62 6.83v.72a15 15 0 0 0-3.55-1.48 13.1 13.1 0 0 0-2.5-6.26A7.68 7.68 0 0 1 14.91 4a7 7 0 0 1 1.71 4.48ZM9 0a9.28 9.28 0 0 0-6.36 2.49A8.22 8.22 0 0 0 0 8.48V13a1.92 1.92 0 0 0 .61 1.39 2.18 2.18 0 0 0 1.47.61 2.1 2.1 0 0 0 1.22-.38A9.94 9.94 0 0 1 9 13a9.94 9.94 0 0 1 5.7 1.58 2.14 2.14 0 0 0 1.05.37 2.2 2.2 0 0 0 1.11-.2 2.07 2.07 0 0 0 .83-.72A1.89 1.89 0 0 0 18 13V8.48a8.22 8.22 0 0 0-2.64-6A9.28 9.28 0 0 0 9 0Z" />
                </svg>
              </span>
              <h6 class="text-lg font-medium">Call Coach</h6>
            </div>
          </div>

          <div class="mt-6 flex h-full flex-col justify-between gap-4">
            {index == 0 && <WhatSee setIndex={setIndex} />}
            {index == 1 && <WhatHappened setIndex={setIndex} />}
            {index == 2 && <Schedule1 setIndex={setIndex} />}
            {index == 3 && <Schedule2 setIndex={setIndex} />}
            {index == 4 && <Schedule3 setIndex={setIndex} />}
            {index == 5 && <Schedule4 setIndex={setIndex} />}
            {index == 6 && <Email1 setIndex={setIndex} />}
            {index == 7 && <Email2 setIndex={setIndex} />}
            {index == 8 && <Email3 setIndex={setIndex} />}
            {index == 9 && (
              <Referral
                formObj={formObj}
                setFormObj={setFormObj}
                setIndex={setIndex}
              />
            )}
            {index == 10 && (
              <Referral2
                formObj={formObj}
                setFormObj={setFormObj}
                setIndex={setIndex}
              />
            )}
            {index == 11 && (
              <Referral3
                formObj={formObj}
                setFormObj={setFormObj}
                setIndex={setIndex}
              />
            )}
            {index == 12 && (
              <Referral4
                formObj={formObj}
                setFormObj={setFormObj}
                setIndex={setIndex}
              />
            )}
            {index == 13 && (
              <Referral5
                formObj={formObj}
                setFormObj={setFormObj}
                setIndex={setIndex}
              />
            )}
            {index == 14 && (
              <Referral6
                formObj={formObj}
                setFormObj={setFormObj}
                setIndex={setIndex}
              />
            )}
            {index == 15 && <Hungup setIndex={setIndex} />}
            {index == 16 && <NotInterested setIndex={setIndex} />}
            {index == 17 && <Discard setIndex={setIndex} />}
          </div>
        </div>
      </div>
      <div className="fixed -bottom-16  w-full ">
        {/* {showWave && (
          <img
            src={wave}
            className="pointer-events-none fixed inset-x-0 -bottom-20 z-10  h-[200px] w-full md:-bottom-16 md:h-[200px] lg:left-auto lg:w-[calc(100%-290px)]"
          />
        )} */}
      </div>
      <BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
        <div
          id="edit-contact-modal"
          className="hs-overlay pointer-events-none fixed start-0 top-8 z-[60]  h-full w-full overflow-y-auto overflow-x-hidden"
        >
          <div class="m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
            <div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
              <div class="flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3">
                <h5 class="text-xl font-semibold">Contact Information</h5>
                <button
                  type="button"
                  class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#edit-contact-modal"
                  onClick={handleClose}
                >
                  <span class="sr-only">Close</span>
                  <svg

                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div class="overflow-y-auto p-5">
                <form action="" class="">
                  <div class="space-y-4">
                    <div class="relative">
                      <input
                        type="text"
                        id="company-name"
                        class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Company Name"
                        name="company"
                        value={formObjContact.company}
                        autoFocus={true}
                        onChange={handleChangeContact}
                      />
                      <label
                        for="company-name"
                        class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Company Name
                      </label>
                    </div>

                    <div class="relative">
                      <input
                        type="text"
                        id="contact-name"
                        class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Contact Name"
                        value={formObjContact.contact}
                        name="contact"
                        onChange={handleChangeContact}
                      />
                      <label
                        for="contact-name"
                        class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Contact Name
                      </label>
                    </div>

                    <div class="relative">
                      <input
                        type="text"
                        id="title"
                        class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder="Title"
                        value={formObjContact.title}
                        name="title"
                        onChange={handleChangeContact}

                      />
                      <label
                        for="title"
                        class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Title
                      </label>
                    </div>

                    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      <div class="relative">
                        <input
                          type="text"
                          id="industry"
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="Industry"
                          value={formObjContact.industry}
                          name="industry"
                          onChange={handleChangeContact}
                        />
                        <label
                          for="industry"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                          Industry
                        </label>
                      </div>

                      <div class="relative">
                        <input
                          type="text"
                          id="timezone"
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="Time Zone"
                          value={formObjContact.time}
                          name="time"
                          onChange={handleChangeContact}
                        />
                        <label
                          for="timezone"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                          Time Zone
                        </label>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 xl:grid-cols-3">
                      <div class="relative">
                        <input
                          type="text"
                          id="address"
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="Contact Address"
                          value={formObjContact.address}
                          name="address"
                          onChange={handleChangeContact}
                        />
                        <label
                          for="address"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                          Contact Address
                        </label>
                      </div>

                      <div class="relative">
                        <input
                          type="text"
                          id="city"
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="City"
                          value={formObjContact.city}
                          name="city"
                          onChange={handleChangeContact}
                        />
                        <label
                          for="city"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                          City
                        </label>
                      </div>

                      <div class="relative">
                        <input
                          type="text"
                          id="state"
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="State"
                          value={formObjContact.state}
                          name="state"
                          onChange={handleChangeContact}
                        />
                        <label
                          for="state"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                          State
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="flex items-center justify-between p-4">
                <button
                  data-hs-overlay="#edit-contact-modal"
                  type="button"
                  class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
                  onClick={handleClose} 
               >
                  Cancel
                </button>

                <button
                  data-hs-overlay="#edit-contact-modal"
                  type="button"
                  class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg"
                  onClick={handleClose}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </BasicModal>
      <BasicModal
        open={open2}
        handleClose={handleClose2}
        handleOpen={handleOpen2}
      >
        <div
          id="search-modal"
          class="hs-overlay pointer-events-none fixed start-0 top-8 z-[60]  h-full w-full overflow-y-auto overflow-x-hidden"
        >
          <div class="m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
            <div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
              <div class="px-2 pt-1 text-right">
                <button
                  onClick={handleClose2}
                  type="button"
                  class="inline-flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#search-modal"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div class="overflow-y-auto p-4">
                <input
                  type="email"
                  id="input-label"
                  class="block w-full rounded-lg border-2 border-secondary/20 px-4 py-3 text-lg font-medium transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Search..."
                  autoFocus={true}
                />

                <div class="mt-6">
                  <p class="mb-2 font-medium">Reason for search:</p>
                  <div class="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                    >
                      Inbound Call
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                    >
                      Reschedule
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                    >
                      Callback
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                    >
                      Confirmation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicModal>
      <BasicModal
        open={open3}
        handleClose={handleClose3}
        handleOpen={handleOpen3}
      >
        <div
          id=""
          class="absolute left-[50%] top-8 -translate-x-[50%] cursor-move"
        >
          {" "}
          <Draggable>
            <div class="m-3 flex justify-center mt-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
              <div class="md:w-[576px] sm:w-[300px] pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
                <div class="flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3">
                  <h5 class="text-xl font-semibold">Call Notes</h5>
                  <button
                    onClick={handleClose3}
                    type="button"
                    class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#call-notes-modal"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="h-4 w-4 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <div class="overflow-y-auto p-4">
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    class="block w-full rounded-lg border-2 border-secondary/20 px-4 py-3 text-lg font-medium transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Start typing here..."
                    autoFocus={true}
                  ></textarea>
                </div>

                <div class="flex items-center justify-between p-4">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Time Stamps
                  </button>

                  <button
                    onClick={handleClose3}
                    data-hs-overlay="#call-notes-modal"
                    type="button"
                    class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
      </BasicModal>
      <BasicModal
        open={open4}
        handleClose={handleClose4}
        handleOpen={handleOpen4}
      >
        <div
          id="discard-modal"
          class="hs-overlay pointer-events-none fixed start-0 top-8 z-[60]  h-full w-full overflow-y-auto overflow-x-hidden"
        >
          <div class="m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
            <div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
              <div class="flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3">
                <h5 class="text-xl font-semibold">Reasons to discard</h5>
                <button
                  onClick={handleClose4}
                  type="button"
                  class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#discard-modal"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-4 w-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div class="overflow-y-auto p-4">
                <div class="flex flex-col items-center justify-center gap-4">
                  <a
                    onClick={handleHungUp}
                    class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                  >
                    Wrong Contact
                  </a>
                  <a
                    onClick={handleHungUp}
                    class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                  >
                    Company not in business
                  </a>
                  <a
                    onClick={handleHungUp}
                    class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                  >
                    Do not call
                  </a>
                  <a
                    onClick={handleHungUp}
                    class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                  >
                    Unsuitable company
                  </a>
                  <a
                    onClick={handleHungUp}
                    class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                  >
                    Current customer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicModal>
    </ManagerDashboard>
  );
};

export default CallProcessing;
