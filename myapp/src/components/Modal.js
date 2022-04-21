import { useEffect } from "react";
import ReactModal from "react-modal";


export default function Modal({ isModalOpen, setIsModalOpen }) {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal isOpen={isModalOpen}>
      <div className="Modal-TitleBar">
        <div className="Modal-Title">Movie Details!</div>
        <div
          className="Modal-CloseButtonWrapper"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </div>
      </div>
    </ReactModal>
  );
}