import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-v2">
        <ul className="grid-12">
          <li className="page prev sell-4"><a href="#">назад</a></li>
          <li className="page page-number sell-5"><a href="#">1</a></li>
          <li className="page page-number sell-6"><a href="#">2</a></li>
          <li className="page page-number sell-7"><a href="#">3</a></li>
          <li className="page page-number sell-8"><a href="#">...</a></li>
          <li className="page next sell-9"><a href="#">вперед</a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;