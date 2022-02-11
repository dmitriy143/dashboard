import './Table.scss';


function Table({ tableList }) {
  return (
    <div className="table-list">
      <>
        <ul>
          <li className="table-item">Position</li>
          {tableList.map(item => <li key={item.id} className="table-item">{item.Position}</li>)}
        </ul>
        <ul>
          <li className="table-item">Location</li>
          {tableList.map(item => <li key={item.id} className="table-item">{item.Location}</li>)}
        </ul>
        <ul>
          <li className="table-item">Price</li>
          {tableList.map(item => <li key={item.id} className="table-item">{item.Price}</li>)}
        </ul>
      </>
    </div>
  )
}

export default Table;