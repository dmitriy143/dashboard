import { useEffect, useState } from 'react';


import Cards from "../../Containers/Cards/Cards";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination"

import './Tab1.scss';


function Tab1({ cardList, tableList }) {
  const [stateTable, setStateTable] = useState(tableList)

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

  return (
    <div className="container-main-grid active-tab" id="tab_1">
      <div className="table-container">
        <Table tableList={stateTable} />
        <Pagination tableList={tableList} changePagination={changePagination} stateTable={stateTable} changeTable={changeTable} />
      </div>
      <div className="card-container">
        <Cards cardList={cardList} />
        <button className="btn add-card">+ ADD CARD</button>
      </div>
    </div>
  )
}

export default Tab1;