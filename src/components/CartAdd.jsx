import React, { useState } from "react";

const CartAdd = ({ menu, addCart }) => {
    const [quantity, setQuantity] = useState(1);

    const quantityChangeHandler = (e) => {
        setQuantity(e.target.value);
    };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (quantity >= 1) {
    //         const newMenu = { name: menu.name, quantity: menu.quantity };
    //         newMenu.quantity = quantity;
    //         addCart(newMenu);
    //         setQuantity(1);
    //     }
    // };

    const submitHandler = (e) => {
        e.preventDefault();
        if (quantity >= 1) {
            const newMenu = {
                ...menu,
                quantity: Number(quantity),
            };
            addCart(newMenu);
            setQuantity(1);
        }
    };

    return (
        <form className="relative text-right" onSubmit={submitHandler}>
            <div className="pb-2">
                <label className="pr-2">수량</label>
                <input
                    type="number"
                    className="border w-12 rounded-md pl-2"
                    value={quantity}
                    min={1}
                    onChange={quantityChangeHandler}
                />
            </div>
            <button className="border px-3 rounded-md">추가하기</button>
        </form>
    );
};

export default CartAdd;
