import React, { useState } from "react";

export const ProductsContext = React.createContext({
    products: [],
    toggleFavorite: () => {},
});

export default (props) => {
    const [products, setProduct] = useState([
        {
            id: "p1",
            title: "Red Scarf",
            description: "A pretty red scarf.",
            isFavorite: false,
        },
        {
            id: "p2",
            title: "Blue T-Shirt",
            description: "A pretty blue t-shirt.",
            isFavorite: false,
        },
        {
            id: "p3",
            title: "Green Trousers",
            description: "A pair of lightly green trousers.",
            isFavorite: false,
        },
        {
            id: "p4",
            title: "Orange Hat",
            description: "Street style! An orange hat.",
            isFavorite: false,
        },
    ]);

    const toggleFavorite = (id) => {
        setProduct((currentProduct) => {
            const prodIndex = currentProduct.findIndex((p) => p.id === id);
            const newFavStatus = !currentProduct[prodIndex].isFavorite;
            // mutate from original
            const updatedProducts = [...currentProduct];
            updatedProducts[prodIndex] = {
                ...currentProduct[prodIndex],
                isFavorite: newFavStatus,
            };
            return updatedProducts;
        });
    };

    return (
        <ProductsContext.Provider
            value={{ products: products, toggleFavorite: toggleFavorite }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};
