import React from 'react';
import Card from './card'
import Item1 from '../../assets/ss.png'
import './porfolio.css'

const portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="PortfolioHeading">
        My Recent Projects
      </div>
      <div className="cards">
      <Card
        img={Item1}
        title='Mingle Loom'
        webLink={'https://minglesongs.netlify.app/'}
        Description='This song app clone is a static web page built using only HTML and CSS Js. '
      />
      </div>
    </div>
  );
}

export default portfolio;
