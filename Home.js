import AllUsers from './AllUsers'
import AddNewUser from './AddNewUser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import DeleteUser from './DeleteUser'

import './css/home.css'


function Home() {

  return (
    <Provider store={store}>
      <Router>
        <div className="home">
          <Routes>
            <Route path="/updateUser/:id" element={<AddNewUser />} />
            <Route path="/" element={<AddNewUser />} />
            <Route path="/deleteUser" element={<DeleteUser />} />
          </Routes>
          <AllUsers />
        </div>
      </Router>
    </Provider>
  );
}

export default Home;
