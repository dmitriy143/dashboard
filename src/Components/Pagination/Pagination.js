import arrow_prev from "../../assets/img/arrow-prev.svg";
import arrow_next from "../../assets/img/arrow-next.svg";

import './Pagination.scss';


function Pagination({ tableList, changePagination, stateTable, changeTable }) {

  return (
    <div className="pagination">
      <ul onClick={changePagination} className="pagination-numbers-list">
        <li className="pagination-numbers-item arrow-container-prev"><a className="arrow-prev" href="#"><img src={arrow_prev} alt="prev" /></a></li>
        {tableList.map((item, i) =>
          <li key={item.id} className="pagination-numbers-item"><a className={'pagination-numbers-link ' + (stateTable.length === i + 1 ? 'pagination-numbers-link-active' : '')} href="#">{i + 1}</a></li>
        )}
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
  )
}

export default Pagination;