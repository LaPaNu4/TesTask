import React from "react";
import ReactDOM from "react-dom";

import Modal from "../modal.jsx";

import { selectIsOpen } from "../../redux/modal/modalSlice.js";
import { useSelector } from "react-redux";
import CarForm from "../carModalForm/carForm.jsx";

const LearnMoreModal = ({ id }) => {
    
  const isOpen = useSelector(selectIsOpen);

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <Modal>
          <CarForm id={id} />
        </Modal>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default LearnMoreModal;
