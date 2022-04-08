import React from "react";

import style from './result.module.css'

const MovieDetail = (props) => {
    return(
        <div><strong>{props.label}:</strong>{props.value}</div>
    )
}

export default MovieDetail