import React from "react";

const CartModal = ({
    isOpenChange,
    cart,
    quantityChange,
    removeCart,
    totalSumPrice,
}) => {

    const modalCloseHandler = () => {
        isOpenChange(false);
    };

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
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            onClick={modalCloseHandler}
        >
            <div
                className="bg-white border rounded-md w-1/4 p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {cart.map((menu) => {
                    return (
                        <main className="border p-3 flex justify-between items-center mb-2">
                            <div>
                                <span>{menu.name}</span>
                                <span className="flex">
                                    <p className="pr-2">{menu.price.toLocaleString()}원 X</p>
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
                            onClick={modalCloseHandler}
                        >
                            취소
                        </button>
                        <button className="border px-3 rounded-md">결제</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CartModal;
