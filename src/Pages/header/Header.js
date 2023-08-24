import React from "react";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import "./style.css";
import { DateRange } from "react-date-range";
import { useState  } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";
import { useNavigate} from 'react-router-dom';


function Header({type}) {
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState('');
  const [options, setOptions] = useState({
    adult: 1,
    Childern: 0,
    room: 1,
  });
  const handleOption = (name, op) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: op === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
 const handleSearch = () => {
     navigate("/hotels" , {state : {destination , date , options}})
 }
  return (
    <div className="header bg-primary  text-light position-relative py-3 index px-5">
      <div className="container mb-5 ">
        <div className="container d-flex gap-3 flex-wrap ">
          <div className="headerListItem  d-flex gap-2 align-items-center border border-2 border-light p-2 rounded-pill">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faPlane} />
            <span>FLights</span>
          </div>
          <div className="headerListItem d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentels</span>
          </div>
          <div className="headerListItem d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>
       {type !== 'list' && <> <h1 className="mt-5">A LifeTime of discount? it's genius</h1>
        <p>
          Get rewawded for your Travels - unlock instant saving of 10% with free
          LamaBooking Account
        </p>
        <button className="headerbtn text-light border-0 p-1 px-3 rounded-2">
          Sign in/Register
        </button>

        <div className="bg-light  text-secondary border border-warning border-2 size  position-absolute top-100 start-50 translate-middle">
          <div className="py-3 d-flex justify-content-around ">
          <div className="d-flex gap-2 align-items-center ">
            <FontAwesomeIcon icon={faBed} className="text-secondary " />
            <input
              type="text"
              placeholder="Where are you going"
              className="border-0 outline p-0"
              onKeyUp={e => setDestination(e.target.value)}
            />
          </div>
          <div className="d-flex gap-2 align-items-center  ">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-secondary date "
            />
            <span className="date " onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}{" "}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="position-absolute top-100 index "
              />
            )}
          </div>
          <div className=" d-flex gap-2 align-items-center index ">
            <FontAwesomeIcon icon={faPerson} className="text-secondary " />
            <span
            className="date"
             onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult.${options.Childern} Childern.${options.room} room `}</span>
            {openOptions && <div className="options d-flex align-items-center  position-absolute top-100 d-flex flex-column bg-light ">
              <div className="container d-flex justify-content-between  align-items-center ">
                <span>Adult</span>
                <div>
                  <button
                    className="outline-butt"
                    onClick={() => handleOption("adult", "d")}
                    disabled={options.adult<=1}
                  >
                    -
                  </button>
                  <span>{options.adult}</span>
                  <button
                    className="outline-butt"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="container d-flex justify-content-between mt-1 align-items-center">
                <span>Childern</span>
                <div>
                  <button
                    className="outline-butt"
                    onClick={() => handleOption("Childern", "d")}
                    disabled={options.Childern<=1}

                  >
                    -
                  </button>
                  <span>{options.Childern}</span>
                  <button
                    className="outline-butt"
                    onClick={() => handleOption("Childern", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="container d-flex justify-content-between mt-1 align-items-center">
                <span>Room</span>
                <div>
                  <button
                    className="outline-butt"
                    onClick={() => handleOption("room", "d")}
                    disabled={options.room<=1}

                  >
                    -
                  </button>
                  <span>{options.room}</span>
                  <button
                    className="outline-butt"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className=" d-flex gap-2 align-items-center  ">
            <Button className="primary text-light border-0 p-1 px-2 rounded-2 "
            onClick={handleSearch}>
              Search
            </Button>
          </div>
          </div>
        </div> </>}
      </div>
    </div>
  );
}

export default Header;
