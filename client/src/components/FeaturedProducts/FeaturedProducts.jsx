import React from "react";

import Card from "../Card/Card";
import "./FeaturedProducts.scss";

import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({type}) => {

const {data, loading, error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`
  )
 

 

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci totam eaque vitae blanditiis reiciendis tempore inventore ipsum voluptates beatae harum!
                </p>
            </div>
            <div className="bottom">
                {error
                ? "Something went Wrong!"
                : loading
                ? "loading"
                : data?.map((item)=>
                    <Card item={item} key={item.id}/>
                )}
            </div>
        </div>
    )
}

export default FeaturedProducts

