import React, { useState } from "react";
import "../tailwind.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePick from "../components/TimePick";
import DateRange from "../components/DateRange";
import profileImg from "../assets/profile.png";
import updateProfileImg from "../assets/updateProfile.png";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Profile() {
  const navigate = useNavigate()
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [value, onChange] = useState("10:00");
  const [date, setDate] = useState(new Date());

  const fetchTime = (val) => {
    onChange(val)
  }
  const fetchDate = (val) => {
    setDate(val)
  }

  const submitProfile = () => {
    const profile = [{
      subject: subject,
      grade: grade,
      time: value,
      date: date
    }]
    let arr = localStorage.getItem('data');
    const data = JSON.stringify(profile)
    if (arr) {
      data = [...arr, data]
    }
    localStorage.setItem('data', data)
    navigate('/profile')
  }

  return (
      <div className="App">
      <div class="bg-white">
        <Header />
      </div>

      <div class="w-4/5 mx-auto mt-10">
        <div class="flex lg:flex-1">
          <p class="-m-1.5 p-1.5 text-logoColor text-logoSize">
            Create a Demo Request
          </p>
        </div>

        <div class="flex">
          <div class="w-1/2 mt-10">
            <p class="text-logoColor text-xl font-bold">Tutor Info</p>
          </div>
          <div class="w-1/2 mt-10 pl-10">
            <p class="text-logoColor text-xl font-bold">Info</p>
          </div>
        </div>

        <div class="flex">
          <div class="w-1/2 mt-5 border-r">
            <div class="flex pr-20">
              <div class="w-1/2 flex">
                <img src={updateProfileImg} alt="Update Profile"/>
                <div class="my-auto ml-5">
                  <p class="text-logoColor text-xl font-bold">Anna Doe</p>
                  <p class="text-base">Expertise: BCS</p>
                  <p class="text-xs">Location: Canada</p>
                </div>
              </div>
              <div class="w-1/2 m-auto text-right">
                <p class="text-base">$15/h</p>
                <p class="text-xs">4.5</p>
              </div>
            </div>
          </div>
          <div class="w-1/2 mt-5 pl-10 m-auto">
            <div class="flex">
              <div class="w-1/2">
                <div class="flex">
                  <div class="w-1/2 my-auto">
                    <p class="text-xl">Name:</p>
                    <p class="text-xl">UserName:</p>
                    <p class="text-xl">Location:</p>
                  </div>
                  <div class="w-1/2 my-auto ml-10">
                    <p class="text-xl text-logoColor">John Doe</p>
                    <p class="text-xl text-logoColor">JDoe234</p>
                    <p class="text-xl">UK</p>
                  </div>
                </div>
              </div>
              <div class="w-1/2 m-auto text-right">
                <p class="text-base text-logoColor">30 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-20 w-4/5 mx-auto">
        <div class="w-1/2">
          <p class="text-logoColor text-xl font-bold">Other details:</p>
        </div>
      </div>

      <div class="flex mt-10 w-4/5 mx-auto">
        <div class="w-1/2">
          <p class="text-base">Enter Subject*</p>
          <input
            type="text"
            onChange={(e) => setSubject(e?.target?.value)}
            class="mt-2 rounded border border-lightgray w-4/5 px-4 py-4"
            placeholder="Subject Name"
          />
        </div>
        <div class="w-1/2">
          <p class="text-base">Grade / Class*</p>
          <input
            type="text"
            onChange={(e) => setGrade(e?.target?.value)}
            class="mt-2 rounded border border-lightgray w-4/5 px-4 py-4"
            placeholder="Select"
          />
        </div>
      </div>

      <div class="flex mt-5 w-4/5 mx-auto">
        <div class="w-1/2">
          <p class="text-base">Start Time*</p>
          <TimePick fetchTime={(val) => fetchTime(val)} time={value}/>
        </div>
        <div class="w-1/2">
          <p class="text-base">Choose Session Date*</p>
          <DateRange fetchDate={(val) => fetchDate(val)} date={date}/>
        </div>
      </div>

      <div class="text-center mt-20">
        <button class="bg-logoColor hover:bg-blue-600 mr-10 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
        <button class="bg-logoColor hover:bg-blue-600 mr-10 text-white font-bold py-2 px-4 rounded" onClick={() => submitProfile()}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Profile;
