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
    const y = JSON.parse(JSON.stringify(tableList))
    y.filter((item) => {
      if (item.id - 1 >= ev.target.value) {
        item.class = false
        return item
      }
    })
    setStateTable(y)
  }

  const howManyPaginationButton = [{
    id: 1,
    classActive: true
  }]
  function createPaginationButton() {
    const selectValue = stateTable.filter(item => item.class === true).length
    const count = Math.ceil(stateTable.length / selectValue)
    for (let i = 2; i <= count; i++) {
      howManyPaginationButton.push({
        id: i,
        classActive: false
      })
    }
    return howManyPaginationButton
  }

  createPaginationButton()
  console.log(howManyPaginationButton)



  function changePagination(ev) {
    ev.preventDefault()
    if (ev.target.closest('.pagination-numbers-link')) {
      const valuePagination = parseInt(ev.target.textContent)

      howManyPaginationButton.filter(item => {
        item.classActive = false
        if (valuePagination === item.id) {
          item.classActive = true
          return item
        }
      })
      console.log(howManyPaginationButton)


      const y = JSON.parse(JSON.stringify(stateTable))
      const allTrue = y.filter((item) => item.class === true)

      const start = ((valuePagination - 1) * allTrue.length) + 1
      const end = start + allTrue.length - 1

      y.filter((item) => {
        item.class = false
        if (item.id >= start && item.id <= end) {
          item.class = true
          return item
        }
      })
      setStateTable(y)
    }
  }
  console.log(howManyPaginationButton)


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
        <Table stateTable={stateTable} />
        <Pagination howManyPaginationButton={howManyPaginationButton} tableList={tableList} changePagination={changePagination} stateTable={stateTable} changeTable={changeTable} />
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