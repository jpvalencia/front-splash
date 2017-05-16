import Header from '../components/Header'
export default () => (
  <div>
  <Header />
  <h1>login</h1>
  <form>
    <p>
    <label>
      email:
      <input type="email" name="email" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <input type="submit" value="Submit" />
    </p>
  </form>
  </div>

)
