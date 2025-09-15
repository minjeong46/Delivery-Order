import React from "react";

const Header = ({ closeModal, cart }) => {

    return (
        <header className="p-5 border-b ">
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-2xl">Delivery App</h1>
                </div>
                <button
                    className="py-2 px-10 border"
                    onClick={closeModal}
                >
                    <div>장바구니 {cart.length}</div>
                </button>
            </nav>
        </header>
    );
};

export default Header;
