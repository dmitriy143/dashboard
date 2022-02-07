
import './Header.scss';

const menuList = [
  { text: 'Home' },
  { text: 'Dashboard' },
  { text: 'About' },
  { text: 'Purchase' },
  {
    text: '',
    class: 'stretch'
  }
]

function Header() {
  return (
    <header>
      <div className="container">
        <div className="hamburger">
          <div className="hamburger_layer"></div>
        </div>
        <div className="logo">Company Dashboard</div>
        <nav>
          <ul>
            {menuList.map(item => <li className={item.class} key={item.text}><a href="#">{item.text}</a></li>)}
          </ul>
        </nav>
        <div className="client"><span>George Orwell</span><img src="https://w-dog.ru/wallpapers/5/9/540041067857677/kosatka-more-pryzhok-gory-kamchatka-foto.jpg" /></div>
      </div>
    </header>
  )
}
export default Header;
