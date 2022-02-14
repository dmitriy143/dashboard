import Card from "../../Components/Card/Card";
import { useEffect, useState } from 'react';

import './Cards.scss';


function Cards({ cardList }) {
  const [stateCard, setStateCard] = useState(cardList)

  useEffect(() => {
    setStateCard(JSON.parse(localStorage.getItem('stateCard')));
  }, []);

  useEffect(() => {
    localStorage.setItem('stateCard', JSON.stringify(stateCard));
  }, [stateCard]);

  function likes(ev) {
    let x = cardList.map((item) => {
      if (ev.target.closest('path') && ev.target.closest('li').id === item.id) {
        if (ev.target.getAttribute('fill') === 'white') {
          item.like = true
        }
        else {
          item.like = false
        }
      }
      return item
    })
    setStateCard(x)
  }
  return (
    <ul className="card-list">
      {stateCard.map(item => <Card key={item.id} item={item} likes={likes} />)}
    </ul>
  )
}
export default Cards;
