import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default UserLayout