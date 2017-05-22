import Link from 'next/link'
import Layout from '../components/Layout';
export default () => (
  <div>
  <Layout>
  <h1>
    Activacion ok
  </h1>
  <Link prefetch href='/login'><a>Login</a></Link>
  </Layout>
  </div>
)
