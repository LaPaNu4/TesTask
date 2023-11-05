import { useEffect } from "react";
import { Container, Overlay } from "./modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen, setIsOpen } from "../redux/modal/modalSlice";


export const Modal = ({ children }) => {

const distatch = useDispatch()
const modalIsOpen = useSelector(selectIsOpen);
    
    
  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      distatch(setIsOpen(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        distatch(setIsOpen(false));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [distatch, modalIsOpen]);

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Container>{children}</Container>
      </Overlay>
    </>
  );
};

export default Modal;
