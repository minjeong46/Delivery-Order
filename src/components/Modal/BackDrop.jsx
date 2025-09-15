import React from "react";

const BackDrop = ({ closeModal }) => {

    return (
        <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeModal}
        />
    );
};

export default BackDrop;
