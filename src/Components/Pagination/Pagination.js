import arrow_prev from "../../assets/img/arrow-prev.svg";
import arrow_next from "../../assets/img/arrow-next.svg";

import './Pagination.scss';


function Pagination({ howManyPaginationButton, changePagination, stateTable, changeTable }) {
  console.log(howManyPaginationButton)
  const selectValue = stateTable.filter(item => item.class === true).length
  // const paginationButtonView = []
  //   ; (() => {
  //     const count = Math.ceil(stateTable.length / selectValue)
  //     for (let i = 1; i <= count; i++) {
  //       paginationButtonView.push({
  //         id: i,
  //         classActive: false
  //       })
  //     }
  //     return paginationButtonView
  //   })()


  return (
    <div className="pagination">
      <ul onClick={changePagination} className="pagination-numbers-list">
        <li className="arrow-container-prev"><a className="arrow-prev" href="#"><img src={arrow_prev} alt="prev" /></a></li>
        {howManyPaginationButton.map((item, i) =>
          <li key={item.id} className="pagination-numbers-item"><a className={'pagination-numbers-link ' + (item.classActive ? 'pagination-numbers-link-active' : '')} href="#">{i + 1}</a></li>
        )}
        <li className="arrow-container-next"><a className="arrow-next" href="#"><img src={arrow_next} alt="next" /></a></li>
      </ul>
      <div className="pagination-select">
        <select onChange={changeTable} value={selectValue} id="some_pos" name="some_pos">
          {stateTable.map((item, i) => <option key={item.id} value={i + 1}> {i + 1}</option>)}
        </select>
      </div>
    </div >
  )
}

export default Pagination;