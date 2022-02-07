import './Table.scss';

const tableList = [{
  id: 'list_1',
  text: ['Position', 'some pos #1', 'some pos #2', 'some pos #3', 'some pos #4', 'some pos #5', 'some pos #6', 'some pos #7', 'some pos #8', 'some pos #9', 'some pos #10',]
}, {
  id: 'list_2',
  text: ['Location', 'some pos #1', 'some pos #2', 'some pos #3', 'some pos #4', 'some pos #5', 'some pos #6', 'some pos #7', 'some pos #8', 'some pos #9', 'some pos #10',]
}, {
  id: 'list_3',
  text: ['Price', 'some pos #1', 'some pos #2', 'some pos #3', 'some pos #4', 'some pos #5', 'some pos #6', 'some pos #7', 'some pos #8', 'some pos #9', 'some pos #10',]
}]

function Table() {
  return (
    <div className="table-list">
      {tableList.map(item => <ul key={item.id} id={item.id}>
        {item.text.map(item => <li key={item} className="table-item">{item}</li>)}
      </ul>)}
    </div>
  )
}

export default Table;