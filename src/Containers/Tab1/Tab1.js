import arrow_prev from "../../assets/img/arrow-prev.svg";
import arrow_next from "../../assets/img/arrow-next.svg";

import Card from "../../Components/Card/Card";
import Table from "../../Components/Table/Table";

import './Tab1.scss';

function Tab1() {
  return (
    <div className="container-main-grid active-tab" id="tab_1">
      <div className="table-container">
        <Table />
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
            <select id="some_pos" name="some_pos">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option selected="selected" value="10">10</option>
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