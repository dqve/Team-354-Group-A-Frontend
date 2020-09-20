import React from "react"
import { NavLink } from "react-router-dom"
import { BsHouseFill } from "react-icons/bs";

const BreadCrumb = ({links}) => {

    let result 
    result = links.length > 1? links.map((each, index) => <><NavLink to={`${each.link}`} key={index} >{each.name}</NavLink> <b> / </b></>) : links.map((each, index) => <NavLink to={`${each.link}`} key={index} >{each.name}</NavLink> )

    return <div style={{paddingTop: '30px',}}> <NavLink to="/"> <BsHouseFill /> Home</NavLink> <b> / </b>{ result }</div>

}

export default BreadCrumb