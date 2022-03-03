import './Table.scss';


function Table({ stateTable }) {

  return (
    <div className="table-list">
      <>
        <ul>
          <li className="table-item">Position</li>
          {stateTable.map(item => <li key={item.id} className={"table-item " + (item.class ? '' : 'notActive')}>{item.Position}</li>)}
        </ul>
        <ul>
          <li className="table-item">Location</li>
          {stateTable.map(item => <li key={item.id} className={"table-item " + (item.class ? '' : 'notActive')}>{item.Location}</li>)}
        </ul>
        <ul>
          <li className="table-item">Price</li>
          {stateTable.map(item => <li key={item.id} className={"table-item " + (item.class ? '' : 'notActive')}>{item.Price}</li>)}
        </ul>
      </>
    </div>
  )
}

export default Table;