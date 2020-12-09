import React from 'react';
import CardProduct from '../product-card/ProductCard';
import './HorizontalScroll.scss';

const HorizontalScroll = () => (
    <section id="main">
        <aside id="horizontal-scroll">
            <CardProduct 
                image="https://image-galery.herokuapp.com/static/media/2.e07daa38.webp"
                title="Nombre del producto"
            />

            <CardProduct 
                image="https://image-galery.herokuapp.com/static/media/2.e07daa38.webp"
                title="Nombre del producto"
            />

            <CardProduct 
                image="https://image-galery.herokuapp.com/static/media/2.e07daa38.webp"
                title="Nombre del producto"
            />

            <article className="item"></article>
            <article className="item"></article>
            <article className="item"></article>
            <article className="item"></article>
            <article className="item"></article>
            <article className="item"></article>
        </aside>
    </section>
);

export default HorizontalScroll;