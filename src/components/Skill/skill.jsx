import React from 'react';
import './skill.css';
import Html from '../../assets/html.png';
import Js from '../../assets/js.png';
import Css from '../../assets/css.png';
import ReactPng from '../../assets/react.png';
import Mongo from '../../assets/mongo.png';
import Express from '../../assets/express.png';
import Node from '../../assets/node.png';

const Skill = () => {
  return (
    <div className='skill'>
      <div className="skillHeading">
        Skills
      </div>
      <div className="skillImages">
        <div className="image-wraper">
          <img src={Html} alt="html" />
        </div>
        <div className="image-wraper">
          <img src={Css} alt="css" />
        </div>
        <div className="image-wraper">
          <img src={Js} alt="js" />
        </div>
        <div className="image-wraper">
          <img src={ReactPng} alt="js" />
        </div>
        <div className="image-wraper">
          <img src={Mongo} alt="js" />
        </div>
        <div className="image-wraper">
          <img src={Express} alt="js" />
        </div>
        <div className="image-wraper">
          <img src={Node} alt="js" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
