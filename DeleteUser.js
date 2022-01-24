import React from 'react';
import {Link} from 'react-router-dom'

export default function DeleteUser() {
  return(
      <div className="deleteUser">
          <label> User Delete </label>
          <Link to='/'><button>Go Back to Home Screen </button></Link>
      </div>
  );
}
