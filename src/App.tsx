import React from 'react';
import './App.scss';
import CardProduct from './components/card-product/CardProduct';

function App(props:any) {
  return (
    <>
      <div className="ed-grid m-grid-4 s-grid-2">
        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

      </div>
    </>
  );
}

export default App;
