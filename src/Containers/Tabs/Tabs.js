import { Link, NavLink } from 'react-router-dom';

import "./Tabs.scss";

function Tabs() {
  const setActive = ({ isActive }) => isActive ? 'tabs_item' : '';
  return (
    <div className="tabs">
      <div className="container">
        <NavLink to="/" className="tabs_item" activeClassName="active" data-tab="#tab_1"><i className="fas fa-border-all"></i><span>Active tab</span></NavLink>
        <NavLink to="/tab2" className="tabs_item" data-tab="#tab_2"><i className="fas fa-chart-pie"></i><span>Inactive tab</span></NavLink>
        <NavLink to="/tab3" className="tabs_item" data-tab="#tab_3"><i className="fas fa-briefcase"></i><span>Inactive tab</span></NavLink>
      </div>
    </div>
  )
}
export default Tabs;