import React from "react";
import {  } from "module";
import { BsStar, BsStarFill } from "react-icons/bs";

function Ratings(props) {
    const {index} = props
    let result = []
    
    for(let i = 1; i <= 5; i++){
        if(i > index){
            result.push(<BsStar className="text-primary" />)
        }else{
        result.push(<BsStarFill className="text-primary" />)
        }
    }
    return result.map((each) => each)
}

export default Ratings