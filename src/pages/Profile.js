import React, { useState, useEffect } from "react";
import "../tailwind.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePick from "../components/TimePick";
import DateRange from "../components/DateRange";
import Header from "../components/Header";
import updateProfileImg from "../assets/updateProfile.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [data, setData] = useState({});
  const [value, onChange] = useState("10:00");
  const [date, setDate] = useState(new Date());

  const fetchTime = (val) => {
    onChange(val)
  }
  const fetchDate = (val) => {
    setDate(val)
  }

  const fetchData = () => {
    let profile = localStorage.getItem('data');
    profile = JSON.parse(profile);
    setData(profile)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <div class="bg-white">
        <Header />
      </div>

      <div class="w-4/5 mx-auto mt-30">
        <div class="flex lg:flex-1">
          <div class="w-1/2">
            <p href="#" class="-m-1.5 p-1.5 text-logoColor text-logoSize">
              Booking Confirmed
            </p>
          </div>
          <div class="w-1/2">
            <div class="text-right">
              <button class="bg-logoColor hover:bg-blue-600 mr-10 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/update-profile')}>
                Edit
              </button>
            </div>
          </div>
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
          <div class="flex mt-5">
            <div class="w-1/2">
              <p class="text-base">Enter Subject</p>
            </div>
            <div class="w-1/2">
              <p class="text-base">
                {/* {data[0]?.subject} */}
                </p>
            </div>
          </div>

          <div class="flex mt-5">
            <div class="w-1/2">
              <p class="text-base">Grade / Class*</p>
            </div>
            <div class="w-1/2">
              <p class="text-base">
                {/* {data[0]?.grade} */}
              </p>
            </div>
          </div>

          <div class="flex mt-5">
            <div class="w-1/2">
              <p class="text-base">Date</p>
            </div>
            <div class="w-1/2">
              {/* {data[0]?.date} */}
            </div>
          </div>
          <div class="flex mt-5">
            <div class="w-1/2">
              <p class="text-base">Time</p>
            </div>
            <div class="w-1/2">
              {/* {data[0]?.time} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
