import { Nav } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="sidebar border border-right col-md-2 col-lg-1 p-0 bg-secondary" style={{height: '94vh'}}>
      <div className="offcanvas-md offcanvas-end bg-secondary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Courier Mgmt</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <Nav className="flex-column">
            <Nav.Item>
              <NavLink to="/dashboard" className="nav-link d-flex align-items-center gap-2 active text-white" aria-current="page">
                Dashboard
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/couriers" className="nav-link d-flex align-items-center gap-2 text-white">
                Couriers
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/customers" className="nav-link d-flex align-items-center gap-2 text-white">
                Customers
              </NavLink>
            </Nav.Item>
          </Nav>

          <hr className="my-3" />

          <Nav className="flex-column mb-auto">
            <Nav.Item>
              <NavLink to="#" className="nav-link d-flex align-items-center gap-2 text-white" onClick={handleLogout}>
                Sign out
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
