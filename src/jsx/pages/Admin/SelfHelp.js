import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MdOutlineArrowForwardIos, MdArrowDropDown } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { FaTeamspeak } from "react-icons/fa";
import { pausebet, Unpausebet, Ispausebet } from "../../../web3/betsMVPService";
import {
  donatefund,
  apporveBUSD,
  isapproved,
  getBUSDBalance,
  getTotalFund,
} from "./../../../web3/DonateMethos";
import toast, { Toaster } from "react-hot-toast";

const error = () =>
  toast.error("Low Balance.", {
    style: {
      padding: "16px",
      color: "#000",
      marginTop: "75px",
    },
    iconTheme: {
      primary: "#0b0b0b",
      secondary: "#ffffff",
    },
  });

export default function SelfHelp() {
  const [pausingtime, setPausingTime] = useState(0);
  const [ispaused, setIspaused] = useState(false);
  const [pausetimeend, setPauseTimeEnd] = useState(0);
  const [amountDonate, setAmountDonate] = useState(0);
  const [isuserApprove, setIsuserApprove] = useState(false);
  const [busduserBalance, setBusdUserBalance] = useState(0);
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    const init = async () => {
      const isbetpaused = await Ispausebet();
      const endpaushtime = window.localStorage.getItem("duration");
      const Isapprove = await isapproved();

      if (Number(Isapprove) > 100) {
        setIsuserApprove(true);
      }
      setPauseTimeEnd(endpaushtime);
      setIspaused(isbetpaused);

      const totaldonation = await getTotalFund();
      setTotalDonation(totaldonation / 10 ** 18);
    };
    init();
    setInterval(async () => {
      const busdbal = await getBUSDBalance();
      setBusdUserBalance(busdbal);
    }, 3000);
  }, []);

  const formatRemainingTime = (time) => {
    var d = Math.floor(time / (3600 * 24));
    var h = Math.floor((time % (3600 * 24)) / 3600);
    var m = Math.floor((time % 3600) / 60);
    var s = Math.floor(time % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " DAY " : " DAYS ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " HOUR " : " HOURS ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " MINUTE " : " MINUTES ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " SECOND" : " SECONDS") : "";
    return `${dDisplay + hDisplay + mDisplay + sDisplay}`;
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer text-danger">00 00:00:00</div>;
    }

    return (
      <div className="timer text-center w-75">
        <div className="value text-light">
          {formatRemainingTime(remainingTime)}
        </div>
        <div className="text text-secondary">REMAINING</div>
      </div>
    );
  };

  const pause = async (event) => {
    if (ispaused) {
      const data = await Unpausebet();
      if (data.status) {
        setPausingTime(0);
        setIspaused(false);

        window.localStorage.removeItem("duration");
      }
      return true;
    }
    const duration = parseInt(
      (new Date(pausingtime).getTime() / 1000).toFixed(0)
    );
    const data = await pausebet(duration);
    if (data.status) {
      setIspaused(true);
      window.localStorage.setItem("duration", duration);
    }
  };
  const Donatethem = async () => {
    if (amountDonate <= busduserBalance) {
      error();
    } else {
      const Isapprove = await isapproved();
      if (Number(Isapprove) > amountDonate) {
        await donatefund(amountDonate);
      } else {
        await apporveBUSD();
        // await donatefund(amountDonate);
      }
    }
  };

  return (
    <div className="self-help-main">
      <div className="outerRow px-0 px-sm-4 py-5 px-xl-4 px-xxl-5 mb-3">
        <div
          className="row justify-content-xl-around justify-content-lg-between justify-content-center row-cols-auto mx-auto p-3 p-md-5"
          style={{
            backgroundColor: "#1C1C1C",
            borderRadius: "10px",
            boxShadow: "10px 10px 4px #000",
          }}
        >
          <div className="col-lg-8 mb-5">
            <p>
              want to take a break from betting? set a temporary restriction on
              your account using the custom selector below to pause betting on
              your profile, note once this is turned on you wont be able to make
              or create bets on betswamp for the selected period but you would
              be able to validate events and use other betswamp features.
            </p>
            {/* <input
            className="my-3 p-3 fw-bold shadow"
            type='datetime-local'
            style={{
              backgroundColor: "#3b3b3b",
              color: "#fff",
              width: "45%",
              outline:'none',
              border: 'none'
            }}
            onChange={(e)=>setPausingTime(e.target.value)}
            placeholder='SELECT DURATION'
          /> */}
            <div className="dropdown self-dordwn">
              <button
                className="btn dropdown-toggle border-0 text-start"
                style={{
                  backgroundColor: "#4D4A4A",
                  width: "100%",
                  padding: "30px 0px",
                  width: "100%",
                  borderRadius: "10px",
                }}
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SELECT DURATION
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenu2"
                style={{ backgroundColor: "#4D4A4A" }}
              >
                <li>
                  <button className="dropdown-item" type="button">
                    1 WEEK
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    2 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    3 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    4 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    5 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    6 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    7 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    8 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    9 WEEKS
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    10 WEEKS
                  </button>
                </li>
              </ul>
            </div>
            <br />
            <button
              className="btn my-3 p-4 fw-bold justify-content-between d-flex self-pause"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                width: "45%",
                borderRadius: "10px",
              }}
              onClick={() => pause()}
            >
              <span>{ispaused ? "UNPAUSE BETTING" : "PAUSE BETTING"}</span>
              <MdOutlineArrowForwardIos className="mt-1" />
            </button>
          </div>
          <div className="col-lg-4 d-flex justify-content-start justify-content-md-center align-items-center self-timer">
            <CountdownCircleTimer
              isPlaying
              size={300}
              duration={pausetimeend - Math.round(new Date().getTime() / 1000)}
              colors={["#006600", "#33cc33", "#ff9900", "#ff0000"]}
              colorsTime={[120, 75, 40, 0]}
              onComplete={() => [true, 1000]}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>

      <div
        className="row secondRow py-5 justify-content-around px-2"
        style={{ borderBottomLeftRadius: "0" }}
      >
        <div className="col-lg-6 donate overflow-hidden mb-5 mb-xl-0">
          <h3>
            <BiDonateHeart /> DONATE
          </h3>
          <p>
            JOIN US AND BE PART OF THE SOLUTION TO GAMBLING ADDICTION, MAKE A
            SMALL DONATION TO OUR <span className="text-danger">PARTNERS</span>{" "}
            WORKING HARD TO HELP PEOPLE WITH ADDICTIONS.
          </p>
          <p>
            TOTAL DONATIONS : <span>${totalDonation}</span>
          </p>
          <hr
            style={{
              backgroundColor: "#2B2A2A",
              opacity: "1",
              width: "120%",
              marginLeft: "-45px",
            }}
          />
          <p>CHOOSE DONATION AMOUNT</p>
          <div className="amount d-flex justify-content-center justify-content-md-between">
            <button className="btn" onClick={() => setAmountDonate(5)}>
              $5
            </button>
            <button className="btn" onClick={() => setAmountDonate(25)}>
              $25
            </button>
            <button className="btn" onClick={() => setAmountDonate(50)}>
              $50
            </button>
            <button className="btn" onClick={() => setAmountDonate(100)}>
              $100
            </button>
            <button className="btn">OTHER</button>
          </div>
          <div className="customAmount mt-3">
            <span
              className="rounded border-end p-4 border-secondary"
              style={{ backgroundColor: "#0F0F0F" }}
            >
              $
            </span>
            <input
              type="number"
              name=""
              id=""
              value={amountDonate}
              onChange={(e) => setAmountDonate(e.target.value)}
            />
            <span>BUSD</span>
          </div>
          <p>BUSD BALANCE: {busduserBalance}</p>
          <button
            className="btn my-3 fw-bold justify-content-between d-flex shadow"
            style={{
              backgroundColor: "#3b3b3b",
              color: "#fff",
              width: "100%",
              padding: "25px",
              borderRadius: "10px",
            }}
            onClick={() => Donatethem()}
          >
            <span>{isuserApprove ? "DONATE" : "APPROVE"}</span>
            <MdOutlineArrowForwardIos className="mt-1" />
          </button>
        </div>
        <div className="col-lg-6 self-speak d-flex flex-column justify-content-between">
          <h3>
            <FaTeamspeak /> SPEAK TO SOMEONE
          </h3>
          <p>
            Connect to a trained, compasionate listiner online who can offer you
            free, confidential advice on gambling addiction. Whether you need
            advice for yourself or to support a friend or relative, we're here
            for you.
          </p>
          <button
            className="btn mt-auto fw-bold justify-content-between d-flex shadow"
            style={{
              backgroundColor: "#3b3b3b",
              color: "#fff",
              width: "100%",
              padding: "25px",
              borderRadius: "10px",
            }}
          >
            <span>CONNECT NOW</span>
            <MdOutlineArrowForwardIos className="mt-1" />
          </button>
        </div>
        <div>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
