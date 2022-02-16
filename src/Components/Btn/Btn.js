
import './Btn.scss';


function Btn({ type, addCard }) {

  return (
    <button onClick={addCard} className="btn add-card" href="#">{type}</button>
  )

}
export default Btn;