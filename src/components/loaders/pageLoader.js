import React from "react";
import { Spinner } from "reactstrap";

const PageLoader = () => {
    const styles = {
        position:"absolute",
        left:0, right:0,
        top:0, bottom:0,
        margin:"auto",
        maxWidth:"100%",
        maxHeight:"100%",
        overflow:"auto",
        width:"200px", 
        height:"200px",
        color: "#2CA8FF",
        opacity: "0.5",
    }

    return (
        <Spinner style={styles}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default PageLoader;