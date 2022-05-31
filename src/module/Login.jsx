import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
      <div className="login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form action="">
                            <div className="form-group">
                                <input type="email" name="email" placeholder='Email' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder='Password' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <button className='btn btn-primary' onClick={() => navigate('listing' , 'replace')}>Login</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    
  )
}

export default  Login;