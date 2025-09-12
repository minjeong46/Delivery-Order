import React from "react";
import CartAdd from "./CartAdd";

const Card = ({ menu, addCart }) => {
    return (
        <div className="w-4/12 flex justify-between py-4 px-5 border-2 mb-2">
            <div className="flex flex-col justify-between">
                <h3 className="pb-2 font-bold text-lg">{menu.name}</h3>
                <span className="font-bold text-md">
                    {menu.price.toLocaleString()}원
                </span>
            </div>
            <CartAdd menu={menu} addCart={addCart} />
        </div>
    );
};

export default Card;
