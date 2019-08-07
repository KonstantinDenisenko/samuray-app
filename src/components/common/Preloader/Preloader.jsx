import React from 'react';
import PreloaderGif from '../../../assets/images/Preloader.gif';

const Preloader = (props) => {

    return (
        <div style={{textAlign: 'center'}}>
            <img alt="Preloader" src={PreloaderGif} style={{width: 70 + 'px'}}/>
        </div>
    )

};

export default Preloader;