import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Define the RippleModal component
const RippleModal = () => {
  return (
    <>
      <label className="btn btn-primary" htmlFor="modal-1">
        Open Modal
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Modal title 1</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum voluptate ratione dicta. Maxime cupiditate, est commodi
            consectetur earum iure, optio, obcaecati in nulla saepe maiores
            nobis iste quasi alias!
          </span>
          <div className="flex gap-3">
            <button className="btn btn-error btn-block">Delete</button>
            <button className="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

// Define the Aditya component
const Aditya = () => {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

const Benefits = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Unlocking creativity, The iGraphixs Services"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <a href={item.url} key={item.id} className="block">
              <div
                className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      {/* Use RippleModal component */}
                      <RippleModal />
                    </p>
                    {/* Use Aditya component */}
                    <Aditya />
                    <Arrow />
                  </div>
                </div>
                {item.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            </a>
          ))}
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        popupOverlayClass="bg-black opacity-50"
      >
        <Modal.Header className="bg-transparent opacity-23" />
        <Modal.Body>
          <div className="text-center bg-transparent">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Visit Our Portfolio 😊
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="pink" onClick={() => setOpenModal(false)}>
                <a href="https://react.dev/">Gallery 1</a>
              </Button>
              <Button color="green" onClick={() => setOpenModal(false)}>
                <a href="https://react.dev/">Gallery 2</a>
              </Button>
              <Button color="red" onClick={() => setOpenModal(false)}>
                <a href="https://react.dev/">Gallery 3</a>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Section>
  );
};

export default Benefits;
