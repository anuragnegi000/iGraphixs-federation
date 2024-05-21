import { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {

  const [data, setData] = useState(2);

  const amount = (data) * 100;
  const currency = "INR";
  const receiptId = "Receipt no. 1";

  const paymentHandler = () => {
    const whatsappLink = "https://wa.me/message/ZPEYAJ2WUS26C1";
    window.open(whatsappLink, 'Hey i want to buy');
  };

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={index}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description || ""}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            <>
              <div className="h3">$</div>
              <div className="text-[5.5rem] leading-none font-bold">
                {item.price}
              </div>
            </>
          </div>

          <Button
            onClick={paymentHandler}
            className="w-full mb-6"
            white={!!item.price}
          >
            {item.price ? "Press to continue" : "Contact us"}
          </Button>

          <ul>
            {(item.features || []).map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
