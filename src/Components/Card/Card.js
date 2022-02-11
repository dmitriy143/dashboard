import card1 from "../../assets/img/card1.jpg";
import card1_mobile from "../../assets/img/card1_mobile.jpg";
import card2 from "../../assets/img/card2.jpg";
import { useEffect, useState } from 'react';

import './Card.scss';


const cardList = [
  {
    id: 'card-' + 1,
    img: card1,
    like: false
  },
  {
    id: 'card-' + 2,
    img: card2,
    like: true
  }];


function Card() {
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
    <>
      {stateCard.map(item => <li id={item.id} key={item.id} className="card-item">
        <div className="card-img">
          <picture>
            <source media="(max-width: 414px)" srcSet={item.img} />
            <source media="(max-width: 630px)" srcSet={card1_mobile} /><img src={item.img} alt="#" />
          </picture>
          <div className="like">
            <svg onClick={likes} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.544 0.979025C11.9386 -0.513489 9.55096 -0.245028 8.07735 1.41368L7.50022 2.06246L6.92308 1.41368C5.4524 -0.245028 3.06182 -0.513489 1.45639 0.979025C-0.383422 2.69206 -0.4801 5.76658 1.16635 7.62343L6.83519 14.009C7.20139 14.4212 7.79611 14.4212 8.16231 14.009L13.8311 7.62343C15.4805 5.76658 15.3839 2.69206 13.544 0.979025Z"
                fill={(item.like === false) ? 'white' : 'red'}></path>
            </svg>
          </div>
        </div>
        <div className="card-item-container">
          <div className="title">
            <h2>Title</h2>
            <div className="date">20.09.2020</div>
          </div>
          <p className="subtitle">Subtitle</p>
          <p className="card-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...</p>
          <div className="container-btn"><a className="btn read-more" href="#">READ MORE</a>
          </div>
        </div>
      </li>)
      }
    </>
  )
}
export default Card;
