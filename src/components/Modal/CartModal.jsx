import React from "react";
import Modal from "./Modal";

const CartModal = ({
    closeModal,
    cart,
    quantityChange,
    removeCart,
    totalSumPrice,
}) => {
    const minusQuantityHandler = (item) => {
        const newItem = item;
        if (Number(newItem.quantity) >= 1) {
            newItem.quantity--;
            quantityChange(newItem);
        }
        if (Number(newItem.quantity) === 0) {
            removeCart(newItem);
        }
    };

    const plusQuantityHandler = (item) => {
        const newItem = item;
        newItem.quantity++;
        quantityChange(newItem);
    };

    return (
        <Modal closeModal={closeModal}>
            {cart.map((menu) => {
                return (
                    <main className="border p-3 flex justify-between items-center mb-2">
                        <div>
                            <span>{menu.name}</span>
                            <span className="flex">
                                <p className="pr-2">
                                    {menu.price.toLocaleString()}원 X
                                </p>
                                <input
                                    type="number"
                                    value={menu.quantity}
                                    className="w-10 border rounded-md pl-2"
                                    disabled
                                />
                            </span>
                        </div>
                        <div>
                            <button
                                className="border px-3 rounded-md mr-2"
                                onClick={() => minusQuantityHandler(menu)}
                            >
                                -
                            </button>
                            <button
                                className="border px-3 rounded-md"
                                onClick={() => plusQuantityHandler(menu)}
                            >
                                +
                            </button>
                        </div>
                    </main>
                );
            })}
            <footer>
                <div className="flex justify-between">
                    <span>전체 금액</span>
                    <span>{totalSumPrice.toLocaleString()}원</span>
                </div>
                <div className="float-right pt-2">
                    <button
                        className="border px-3 rounded-md mr-2"
                        onClick={closeModal}
                    >
                        취소
                    </button>
                    <button className="border px-3 rounded-md">결제</button>
                </div>
            </footer>
        </Modal>
    );
};

export default CartModal;
