import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    {/* <!-- Page content here --> */}
    <h1 className='text-3xl text-primary text-center mt-5 font-bold'>Welcome to Dashboard</h1>
    <Outlet />
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Appointment</Link></li>
      <li><Link to='/dashboard/review'>My Review</Link></li>
      <li><Link to='/dashboard/history'>My History</Link></li>
      <li>{
      admin && <Link to='/dashboard/users'>All Users</Link>
      }
      </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;