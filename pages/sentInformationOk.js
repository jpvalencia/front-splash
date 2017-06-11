import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <div>
  <Layout>
  <h1>
      Cotizacion enviada
  </h1>
  <Link prefetch href='/dashboard'><a>Dashboard</a></Link>
  </Layout>
  </div>
)
