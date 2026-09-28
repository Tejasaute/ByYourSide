import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default AdminLayout