import React from 'react';
import Card from '../Card';

const Wrapper = ({marginTop, property, render}) => (
<div>
    <main style={{
      marginTop
    }}>
        <h1>Its everywhere!!!!</h1>
        <Card property={property} />
        {render && render()}
    </main>
</div>);

export default Wrapper;