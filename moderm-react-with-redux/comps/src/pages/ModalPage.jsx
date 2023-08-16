import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <button onClick={handleClose}>I Accept</button>;

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Content my modal</p>
    </Modal>
  );

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
