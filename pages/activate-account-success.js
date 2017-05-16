import Link from 'next/link'
import Header from '../components/Header';
export default () => (
  <div>
  <Header />
  <h1>
    Activacion ok
  </h1>
  <Link prefetch href='/login'><a>Login</a></Link>
  </div>
)
