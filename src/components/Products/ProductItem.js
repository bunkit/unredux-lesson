import Card from "../UI/Card";
import React from "react";
import { useStore } from "../../hook/store";

import "./ProductItem.css";

const ProductItem = React.memo((props) => {
    console.log("RENDERING");
    const { dispatch } = useStore(false);
    // console.log(dispatch);
    const toggleFavHandler = () => {
        dispatch("TOGGLE_FAV", props.id);
    };

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className="product-item">
                <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
                <p>{props.description}</p>
                <button
                    className={!props.isFav ? "button-outline" : ""}
                    onClick={toggleFavHandler}
                >
                    {props.isFav ? "Un-Favorite" : "Favorite"}
                </button>
            </div>
        </Card>
    );
});

export default ProductItem;
