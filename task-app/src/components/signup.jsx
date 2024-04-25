import "./signup.css"
import { Link } from 'react-router-dom';

function Signup () {
  return (
    <div>
      <div className="s-screen">
        <div className="text">
        <h1>Create your<br></br>PopX account</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
        <form className="login-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Marry Doe" />
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input type="text" name="p.no" placeholder="Marry Doe" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Marry Doe"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Marry Doe"/>
        </div>
        <div className="form-group">
          <label>Company name</label>
          <input type="password" name="password" placeholder="Marry Doe" />
        </div>
        <Link to="/profile"><button className="c-account" type="submit">Create Account</button></Link>
      </form>
      </div>
    </div>
  );
}

export default Signup;