import card1 from "./assets/img/card1.jpg";
import imgMobile from "./assets/img/card1Mobile.jpg";
import card2 from "./assets/img/card2.jpg";


let state = {
  tableList: [{ id: 0, Position: 'some pos #1', Location: 'some pos #1', Price: 'some pos #1' },
  { id: 1, Position: 'some pos #2', Location: 'some pos #2', Price: 'some pos #2' },
  { id: 2, Position: 'some pos #3', Location: 'some pos #3', Price: 'some pos #3' },
  { id: 3, Position: 'some pos #4', Location: 'some pos #4', Price: 'some pos #4' },
  { id: 4, Position: 'some pos #5', Location: 'some pos #5', Price: 'some pos #5' },
  { id: 5, Position: 'some pos #6', Location: 'some pos #6', Price: 'some pos #6' },
  { id: 6, Position: 'some pos #7', Location: 'some pos #7', Price: 'some pos #7' },
  { id: 7, Position: 'some pos #8', Location: 'some pos #8', Price: 'some pos #8' },
  { id: 8, Position: 'some pos #9', Location: 'some pos #9', Price: 'some pos #9' },
  { id: 9, Position: 'some pos #10', Location: 'some pos #10', Price: 'some pos #10' }],
  cardList: [
    {
      id: 'card-' + 1,
      img: card1,
      imgMobile: imgMobile,
      like: false
    },
    {
      id: 'card-' + 2,
      img: card2,
      imgMobile: imgMobile,
      like: true
    }]
}

export default state;