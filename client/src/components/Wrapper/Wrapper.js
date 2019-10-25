import React from 'react';
import Card from '../Card';
import "./wrapper.css"

const Wrapper = ({marginTop, property, render, info}) => (
<div>
    <main style={{
      marginTop
    }}>
        <h1 class = "header" >{property}</h1>
        <Card property={property} />
        {render && render()}
    </main>
</div>);

export default Wrapper;