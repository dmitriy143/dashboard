import arrow_prev from "../../assets/img/arrow-prev.svg";
import arrow_next from "../../assets/img/arrow-next.svg";
import { useEffect, useState } from 'react';


import Card from "../../Components/Card/Card";
import Table from "../../Components/Table/Table";

import './Tab1.scss';


const tableList = [{ id: 0, Position: 'some pos #1', Location: 'some pos #1', Price: 'some pos #1' },
{ id: 1, Position: 'some pos #2', Location: 'some pos #2', Price: 'some pos #2' },
{ id: 2, Position: 'some pos #3', Location: 'some pos #3', Price: 'some pos #3' },
{ id: 3, Position: 'some pos #4', Location: 'some pos #4', Price: 'some pos #4' },
{ id: 4, Position: 'some pos #5', Location: 'some pos #5', Price: 'some pos #5' },
{ id: 5, Position: 'some pos #6', Location: 'some pos #6', Price: 'some pos #6' },
{ id: 6, Position: 'some pos #7', Location: 'some pos #7', Price: 'some pos #7' },
{ id: 7, Position: 'some pos #8', Location: 'some pos #8', Price: 'some pos #8' },
{ id: 8, Position: 'some pos #9', Location: 'some pos #9', Price: 'some pos #9' },
{ id: 9, Position: 'some pos #10', Location: 'some pos #10', Price: 'some pos #10' }]


function Tab1() {
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

  return (
    <div className="container-main-grid active-tab" id="tab_1">
      <div className="table-container">
        <Table tableList={stateTable} />
        <div className="pagination">
          <ul className="pagination-numbers-list">
            <li className="pagination-numbers-item arrow-container-prev"><a className="arrow-prev" href="#"><img src={arrow_prev} alt="prev" /></a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">1</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">2</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">3</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">4</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link pagination-numbers-link-active" href="#">5</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">6</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">7</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">8</a></li>
            <li className="pagination-numbers-item"><a className="pagination-numbers-link" href="#">9</a></li>
            <li className="pagination-numbers-item arrow-container-next"><a className="arrow-next" href="#"><img src={arrow_next} alt="next" /></a></li>
          </ul>
          <div className="pagination-select">
            <select onChange={changeTable} value={stateTable.length} id="some_pos" name="some_pos">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-container">
        <ul className="card-list">
          <Card />
        </ul>
        <button className="btn add-card">+ ADD CARD</button>
      </div>
    </div>
  )
}

export default Tab1;