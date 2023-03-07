import { Link, Outlet } from 'react-router-dom'

function About () {
  return (
    <div>
      <h1>About</h1>
      <Link to='article'>Article</Link>
      <Outlet />
    </div>
  )
}

export default About