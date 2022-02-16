import Card from "../../Components/Card/Card";
import { useEffect } from 'react';

import './Cards.scss';


function Cards({ cardList, setStateCardList, deleteCard }) {

  useEffect(() => {
    setStateCardList(JSON.parse(localStorage.getItem('stateCard')));
  }, []);

  useEffect(() => {
    localStorage.setItem('stateCard', JSON.stringify(cardList));
  }, [cardList]);

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
    setStateCardList(x)
  }
  return (
    <ul className="card-list">
      {cardList.map(item => <Card key={item.id} item={item} likes={likes} deleteCard={deleteCard} />)}
    </ul>
  )
}
export default Cards;
