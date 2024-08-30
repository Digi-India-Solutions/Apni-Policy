import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col">
          <h2>Insurance</h2>
          <ul>
            <li><Link>General Insurance</Link></li>
            <li><Link>Life Insurance</Link></li>
            <li><Link>Term Insurance</Link></li>
            <li><Link>Investment</Link></li>
            <li><Link>Health Insurance</Link></li>
            <li><Link>Other Insurance</Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Resources</h2>
          <ul>
            <li><Link to={'/testimonial'}>Customer reviews</Link></li>
            {/* <li><Link>My Account</Link></li>
            <li><Link>Blogs</Link></li> */}
          </ul>
        </div>
        <div className="col">
          <h2>Company</h2>
          <ul>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/contact'}>Contact us</Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Follow us on</h2>
          <ul>
          <li><Link>Facebook</Link></li>
          <li><Link>Instagram</Link></li>
          <li><Link>Linkdin</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
