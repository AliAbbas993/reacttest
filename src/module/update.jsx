import React from 'react';
import { useNavigate , useParams} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { edituser } from '../redux/users'

const Update = () => {
    
    const {user} = useSelector((state) => state)
    const dispatch = useDispatch()


    const params = useParams();
    const navigate = useNavigate();

    console.log(params , "params");

    const handleUpdate = () => {
        dispatch(edituser(params))
        navigate('/listing' , 'replace');
    }

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 12,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 23,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 14,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 21,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 15,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 27,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 16,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 29,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 12,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 24,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

  return (
      <div className="update-form-block">
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
                            <button className='btn btn-primary' onClick={handleUpdate}>Login</button>
                        </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Update;
