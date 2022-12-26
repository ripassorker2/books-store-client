import { useState } from "react";
import { Link } from "react-router-dom";
import ThirdOffer from "../Offer/ThirdOffer/ThirdOffer";
import SecondOffer from "../SecondOffer/SecondOffer";
import FirstOffer from './../FirstOffer/FirstOffer';


export default function OfferTabs() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex md:justify-end justify-center px-4 max-w-screen-xl  m-auto ">
          <ul className="flex justify-end  space-x-2 offer-ul no-underline mb-3">
            <li>
              <Link
                onClick={() => setOpenTab(1)}
                className="inline-block text-gray-60 "
              >
                30%Offer
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenTab(2)}
                className="inline-block px-2 text-gray-600"
              >
                45%Offer
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenTab(3)}
                className="inline-block text-gray-600"
              >
                60%Offer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <FirstOffer />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <SecondOffer />
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <ThirdOffer />
        </div>
      </div>
    </div>
  );
}
