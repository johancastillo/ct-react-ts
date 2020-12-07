import React from 'react';
import './CardProduct.scss';


const CardProduct = (props:any) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={props.image} alt="" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
        </div>
    </article>
);

export default CardProduct;