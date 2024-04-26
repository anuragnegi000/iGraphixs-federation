import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

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
                      <Button onClick={() => setOpenModal(true)} type="modal">
                        {" "}
                        Test{" "}
                      </Button>
                      <Modal
                        show={openModal}
                        size="md"
                        onClose={() => setOpenModal(false)}
                        popup
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Are you sure you want to delete this product?
                            </h3>
                            <div className="flex justify-center gap-4">
                              <Button
                                color="failure"
                                onClick={() => setOpenModal(false)}
                              >
                                {"Yes, I'm sure"}
                              </Button>
                              <Button
                                color="gray"
                                onClick={() => setOpenModal(false)}
                              >
                                No, cancel
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </p>
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
    </Section>
  );
};

export const ModalPublic = () => {
  return <></>;
};

export default Benefits;
