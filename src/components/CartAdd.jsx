import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const CartAdd = ({ menu }) => {
    const quantityRef = useRef(1);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredQuantity = Number(quantityRef.current.value);

        if (enteredQuantity >= 1) {
            dispatch(add({ ...menu, quantity: enteredQuantity }));
            quantityRef.current.value = 1;
        }
    };

    return (
        <form className="relative text-right" onSubmit={submitHandler}>
            <div className="pb-2">
                <label className="pr-2">수량</label>
                <input
                    type="number"
                    className="border w-12 rounded-md pl-2"
                    defaultValue={1}
                    min={1}
                    ref={quantityRef}
                />
            </div>
            <button className="border px-3 rounded-md">추가하기</button>
        </form>
    );
};

export default React.memo(CartAdd);
