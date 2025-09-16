import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            const existsCart = state.find(
                (item) => item.name === action.item.name
            );
            if (existsCart) {
                return state.map((item) =>
                    item.name === action.item.name
                        ? {
                              ...item,
                              quantity: item.quantity + action.item.quantity,
                          }
                        : item
                );
            }
            return [...state, action.item];
        }
        case "REMOVE": {
            return state.filter((item) => item.name !== action.item.name);
        }
        case "CHANGE": {
            return state.map((item) =>
                item.name === action.item.name
                    ? {
                          ...item,
                          quantity: action.item.quantity,
                      }
                    : item
            );
        }
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
