import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Aditya = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        popupOverlayClass="bg-black opacity-50"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
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
    </>
  );
};

export default Aditya;
