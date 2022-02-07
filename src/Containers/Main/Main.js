
import { Routes, Route } from 'react-router-dom';
import Tab1 from '../Tab1/Tab1'
import Tab2 from '../Tab2/Tab2'
import Tab3 from '../Tab3/Tab3'

import "./Main.scss"


function Main() {
  return (
    <div className="main">
      <div className="container-main">
        <Routes>
          <Route path="/" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />
        </Routes>
      </div>
    </div>
  );
}
export default Main;