import { useState } from "react";
import { Link } from "react-router-dom";
import BestSell from "./BestSell";
import HotSell from "./HotSell";
import Trend from "./Trend";

export default function HotsellTabs() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-5">
        <div className="flex md:justify-end justify-center px-4 max-w-screen-xl m-auto ">
          <ul className="flex justify-end  space-x-2 offer-ul no-underline mb-3 ">
            <li>
              <Link onClick={() => setOpenTab(1)} className="inline-block px-2">
                Trending
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenTab(2)}
                className="inline-block px-2  "
              >
                Hot Sell
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpenTab(3)} className="inline-block px-2">
                Best Sell
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <Trend />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <HotSell />
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <BestSell />
        </div>
      </div>
    </div>
  );
}
