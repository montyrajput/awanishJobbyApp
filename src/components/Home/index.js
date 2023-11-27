import {Link} from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">
        Find The Job That <br />
        Fits Your Life
      </h1>
      <p className="home-paragraph">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link className="retry-btn-link" to="/Jobs">
        <button className="find-jobs-button" type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
)

export default Home
