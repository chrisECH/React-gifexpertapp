import React from 'react';
import PropTypes from 'prop-types'; //impt
import './styles/GifGridItem.css';

export const GifGridItem = ({title, url}) => {
   
    return (
        <div className="card animate__animated animate__fadeIn  animate__delay-1s">
            <img src={url} alt={title}></img>
            <p >{title}</p>

            
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

