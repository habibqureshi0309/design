import "./tailwind.css";
import profile from "../src/assets/profile.png";
import updateProfile from "../src/assets/updateProfile.png";
import DateRange from "./components/DateRange";
import TimePick from "./components/TimePick";

function App() {
  return (
    <div className="App">
      <div class="bg-white">
        <header class="inset-x-0 top-0 z-50">
          <nav
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a
                href="#"
                class="-m-1.5 p-1.5 text-logoColor font-bold text-logoSize"
              >
                <span class="sr-only">Your Company</span>
                Air Academic
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <button class="bg-blue-500 hover:bg-blue-600 mr-10 text-white font-bold py-2 px-4 rounded">
                Upgrade
              </button>
              <img
                src={profile}
                alt="Image"
                class="h-250 w-250 rounded-tl rounded-br"
              />
            </div>
          </nav>
        </header>
      </div>

      <div class="w-4/5 mx-auto mt-10">
        <div class="flex lg:flex-1">
          <p href="#" class="-m-1.5 p-1.5 text-logoColor text-logoSize">
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
                <img src={updateProfile} alt="Update Profile" />
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
            <div class="flex pr-20">
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
            class="mt-2 rounded border border-lightgray w-4/5 px-4 py-4"
            placeholder="Subject Name"
          />
        </div>
        <div class="w-1/2">
          <p class="text-base">Grade / Class*</p>
          <input
            type="text"
            class="mt-2 rounded border border-lightgray w-4/5 px-4 py-4"
            placeholder="Select"
          />
        </div>
      </div>

      <div class="flex mt-5 w-4/5 mx-auto">
        <div class="w-1/2">
          <p class="text-base">Start Time*</p>
          <TimePick />
        </div>
        <div class="w-1/2">
          <p class="text-base">Choose Session Date*</p>
          <DateRange />
        </div>
      </div>

      <div class="text-center mt-20">
        <button class="bg-blue-500 hover:bg-blue-600 mr-10 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
        <button class="bg-blue-500 hover:bg-blue-600 mr-10 text-white font-bold py-2 px-4 rounded">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default App;
