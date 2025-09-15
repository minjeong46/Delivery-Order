/*
메뉴가 리스트 형태로 주어지고, 여기에 원하는 메뉴 수량을 조절할 수 있다.
각 메뉴 카드 오른쪽에 추가하기 버튼이 있어서 누르면 장바구니에 담을 수 있다.
네비게이션 바에 있는 장바구니 버튼을 클릭하면 장바구니를 모달로 볼 수 있어서 한꺼번에 결제를 할 수 있다.

3~5개 정도의 음식 메뉴 카드를 만듭니다. 항목에는 다음과 같은 프로퍼티가 필요합니다.
음식 이름 : string
음식 가격 : number
수량 : number
최소 수량은 1입니다. 추가하기 버튼을 누른 후 수량은 1로 초기화가 되야 합니다.
추가한 항목들은 장바구니 버튼을 눌러서 모달에서 볼 수 있어야 합니다.
모달에서는 품목별로 수량이 합산되서 나타나며 더하거나 뺄 수 있습니다.
전체 금액을 합산해서 모달에서 볼 수 있습니다.
*/

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import CartModal from "./components/Modal/CartModal";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalSumPrice, setTotalSumPrice] = useState(0);

    const [menus, setMenus] = useState([
        {
            name: "피자",
            price: 20000,
            quantity: 1,
        },
        {
            name: "김치찌개",
            price: 9000,
            quantity: 1,
        },
        {
            name: "자장면",
            price: 6500,
            quantity: 1,
        },
    ]);

    useEffect(() => {
        if (cart.length >= 1) {
            const totalSum = cart.reduce((total, cart) => {
                return total + cart.price * cart.quantity;
            }, 0);
            setTotalSumPrice(totalSum);
        }
        if (cart.length === 0) {
            setTotalSumPrice(0);
            setIsOpen(false);
        }
    }, [cart]);

    const addCart = (value) => {
        const existsCart = cart.find((item) => item.name === value.name);
        const addQuantity = Number(value.quantity);

        if (existsCart) {
            setCart((prev) =>
                prev.map((item) =>
                    item.name === value.name
                        ? {
                              ...item,
                              quantity: Number(item.quantity) + addQuantity,
                          }
                        : item
                )
            );
        } else {
            setCart((prev) => [...prev, { ...value, quantity: addQuantity }]);
        }
    };

    const quantityChange = (value) => {
        const quantity = Number(value.quantity);
        setCart((prev) =>
            prev.map((item) =>
                item.name === value.name
                    ? {
                          ...item,
                          quantity: quantity,
                      }
                    : item
            )
        );
    };

    const removeCart = (value) => {
        if (value.quantity === 0) {
            const newItem = cart.filter((item) => item.name !== value.name);
            setCart(newItem);
        }
    };

    const closeModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <Header isOpen={isOpen} closeModal={closeModal} cart={cart} />
            <main className="w-screen h-screen m-auto flex justify-center items-center flex-col">
                {menus.map((item) => {
                    return <Card menu={item} addCart={addCart} />;
                })}
            </main>
            {isOpen && cart.length !== 0 && (
                <CartModal
                    closeModal={closeModal}
                    cart={cart}
                    quantityChange={quantityChange}
                    removeCart={removeCart}
                    totalSumPrice={totalSumPrice}
                />
            )}
        </>
    );
}

export default App;
