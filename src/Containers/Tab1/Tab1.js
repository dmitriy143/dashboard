import card1 from "../../assets/img/card1.jpg";
import imgMobile from "../../assets/img/card1Mobile.jpg";
import card2 from "../../assets/img/card2.jpg";

import Cards from "../../Containers/Cards/Cards";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination"
import Btn from "../../Components/Btn/Btn"

import { useEffect, useState } from 'react';
import './Tab1.scss';


function Tab1({ cardList, tableList }) {

  const [stateTable, setStateTable] = useState(tableList)
  const [stateCardList, setStateCardList] = useState(cardList)

  useEffect(() => {
    setStateTable(JSON.parse(localStorage.getItem('stateTable')));
  }, []);

  useEffect(() => {
    localStorage.setItem('stateTable', JSON.stringify(stateTable));
  }, [stateTable]);


  function changeTable(ev) {
    const y = [...tableList]
    y.splice(ev.target.value)
    setStateTable(y)
  }
  function changePagination(ev) {
    if (ev.target.closest('.pagination-numbers-link')) {
      const valuePagination = ev.target.closest('.pagination-numbers-link').textContent
      const y = [...tableList]
      y.splice(valuePagination)
      setStateTable(y)
    }
  }

  function addCard() {
    let prevId = 0;
    if (stateCardList.length) {
      prevId = parseInt(stateCardList[stateCardList.length - 1].id.replace('card-', ''));
    }
    setStateCardList(
      [...stateCardList,
      {
        id: 'card-' + (prevId + 1),
        img: card1,
        imgMobile: imgMobile,
        like: false
      }]
    )
  }

  function deleteCard(ev) {
    const idCard = ev.target.closest('.card-item').getAttribute('id')
    const newStateCardList = stateCardList.filter(item => item.id !== idCard)
    setStateCardList(newStateCardList)
  }

  return (
    <div className="container-main-grid active-tab" id="tab_1">
      <div className="table-container">
        <Table tableList={stateTable} />
        <Pagination tableList={tableList} changePagination={changePagination} stateTable={stateTable} changeTable={changeTable} />
      </div>
      <div className="card-container">
        <Cards cardList={stateCardList} setStateCardList={setStateCardList} deleteCard={deleteCard} />
        <div className="add-card-container">
          <Btn type={'+ ADD CARD'} addCard={addCard} />
        </div>
      </div>
    </div>
  )
}

export default Tab1;