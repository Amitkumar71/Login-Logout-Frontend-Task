import "./signin.css"
import { Link } from 'react-router-dom';

function Signin () {
  return (
    <div>
      <div className="screen">
        <div className="text">
        <h1>Signin to your<br></br>PopX account</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
        <form className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Enter email address" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
       <Link to="/profile" type="submit" style={{color:"white",width:"100%"}}><button>Login</button></Link>
      </form>
      </div>
    </div>
  );
}

export default Signin;