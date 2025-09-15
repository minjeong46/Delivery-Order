import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

const Modal = ({ children, closeModal }) => {
    return ReactDOM.createPortal(
        <>
            <BackDrop closeModal={closeModal} />
            <div
                className="fixed inset-0 flex items-center justify-center z-50"
                onClick={closeModal}
            >
                <div
                    className="bg-white border rounded-md w-1/4 p-6 relative z-50"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal-root")
    );
};

export default Modal;
