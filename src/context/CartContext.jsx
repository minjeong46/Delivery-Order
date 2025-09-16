// import React, { createContext, useContext, useReducer } from "react";

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD": {
//             const existsCart = state.find(
//                 (item) => item.name === action.item.name
//             );
//             if (existsCart) {
//                 return state.map((item) =>
//                     item.name === action.item.name
//                         ? {
//                               ...item,
//                               quantity: item.quantity + action.item.quantity,
//                           }
//                         : item
//                 );
//             }
//             return [...state, action.item];
//         }
//         case "REMOVE": {
//             return state.filter((item) => item.name !== action.item.name);
//         }
//         case "CHANGE": {
//             return state.map((item) =>
//                 item.name === action.item.name
//                     ? {
//                           ...item,
//                           quantity: action.item.quantity,
//                       }
//                     : item
//             );
//         }
//         default:
//             return state;
//     }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, dispatch] = useReducer(cartReducer, []);

//     return (
//         <CartStateContext.Provider value={cart}>
//             <CartDispatchContext.Provider value={dispatch}>
//                 {children}
//             </CartDispatchContext.Provider>
//         </CartStateContext.Provider>
//     );
// };

// export const useCartState = () => useContext(CartStateContext);
// export const useCartDispatch = () => useContext(CartDispatchContext);
