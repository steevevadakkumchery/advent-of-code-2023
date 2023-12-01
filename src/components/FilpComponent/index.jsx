/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import titleImage from '../../assets/elves-trebuchet.png';
import treeImage from '../../assets/tree.png'
import starImage from '../../assets/star.png'
import starCoordinates from './starPositions';

import '../../App.css'
import './Tree.css'
import { cloneDeep, filter, reverse } from 'lodash';
import questionsInfo from '../../questions/info';

const Elves = () => (
  <div className="front">
    <img src={titleImage} className="logo" />
  </div>
);

const Star = ({ top, left, onPositionChange }) => {
  const [startDrag, setStartDrag] = useState();

  return (
    <img
      src={starImage}
      draggable={true}
      onDragStart={(e) => setStartDrag(e)}
      onDragEnd={(e) => {
        const newLeft = e.clientX - (startDrag.clientX - left);
        const newTop = e.clientY - (startDrag.clientY - top);

        onPositionChange({ top: newTop , left: newLeft })
      }}
      className="star"
      style={{ top: top + 'px', left: left + 'px' }}
    />
  )
}

const Tree = () => {
  const [starPositions, setStarPositions] = useState(starCoordinates)
  const treeRef = useRef();

  const numberOfStarsWon = filter(questionsInfo, { complete: true }).length;
  const starsToShow = starPositions.slice(0, numberOfStarsWon);
  return (
    <div className="back" ref={treeRef}>
      {starsToShow.map((s, i) => <Star key={i} index={i} top={starPositions[i].top} left={starPositions[i].left} onPositionChange={({top, left}) => {
        const newPositions = cloneDeep(starPositions);
        newPositions[i] = { top, left }
        setStarPositions(newPositions)
      }} />)}
      
      <img src={treeImage} className="logo"/>
    </div>  
  )
  
};

const FlipComponent = () => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flipper">
        <Elves />
        <Tree />
      </div>
    </div>
  );
};

export default FlipComponent;
