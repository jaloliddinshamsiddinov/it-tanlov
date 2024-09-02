import { Avatar, AvatarGroup, Button } from "@mui/material";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="w-full bg-slate-100 pt-[60px]">

        <div className="container mx-auto px-[15px] lg:px-0 flex justify-between">
          <div className="">
            <p className="inline-flex items-center text-blue-800 font-medium bg-blue-200 rounded-full px-1"><MdOutlineVerified className="mr-2" /> G‘oliblar munosib taqdirlanadi</p>

            <div className="flex items-center h-[55px] mb-3">
              <h1 className="text-blue-800 text-6xl font-medium">“Kelajak IT niki”</h1>
              <div className=" mx-3 w-[88px] h-full rounded-2xl bg-[url('https://framerusercontent.com/images/OKgQOteA2h5ZmWhi38CC8aa6iNc.jpeg')] bg-no-repeat bg-cover bg-center"></div>
            </div>

            <div className="flex items-center h-[55px] mb-3">
              <div className="mr-3 w-[88px] h-full rounded-2xl bg-[url('https://framerusercontent.com/images/3S47oBm0fFZn3g7QpUUhoAo88.jpeg')] bg-no-repeat bg-cover bg-center"></div>
              <h1 className="text-blue-800 text-6xl font-medium">videoroliklar</h1>
            </div>

            <div className="flex items-center h-[55px] mb-[55px]">
              <h1 className="text-blue-800 text-6xl font-medium flex items-center">tanlovi</h1>
              <div className="flex bg-blue-200 px-3 ml-2 rounded-full items-center py-1">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="https://framerusercontent.com/images/pbMMal0JnwLWWALCbEz08vMRQE.png" />
                  <Avatar alt="Travis Howard" src="https://framerusercontent.com/images/wdwHdIQkPlIESSJ11qT2pe1eo4.png" />
                  <Avatar alt="Cindy Baker" src="https://framerusercontent.com/images/D0I12w70ZggAsfFUklDvRhrt2I.png" />
                </AvatarGroup>
                <p className="ml-2 text-blue-800 font-medium">4ta g'olib</p>
              </div>
            </div>

            <p className="text-slate-600 mb-3">Yoshlar o‘rtasida IT ta’limni keng targ‘ib qilish maqsadida faol <br /> kontent mualliflar o‘rtasida <b className="text-black">"Videoroliklar"</b> tanlovini e’lon qilamiz!</p>

            <Link to={'ishtirok-etish'}>
              <Button variant="contained">Ishtirok etish</Button>
            </Link>
          </div>

          <div>
            <div className="w-full h-full bg-[url('https://framerusercontent.com/images/37LatFpLNSXBrLM1gRaaMHtK8o.png')]">sdf</div>
          </div>
        </div>
      </div>
    </>
  )
}
