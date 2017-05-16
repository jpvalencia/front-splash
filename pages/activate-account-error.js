import Link from 'next/link'
import Header from '../components/Header'

export default () => (
  <div>
  <Header />
  <h1>
      Error Activacion
  </h1>
  <Link prefetch href='/index'><a>Home</a></Link>
  </div>
)
