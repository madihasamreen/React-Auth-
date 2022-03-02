
import './App.css';
import Form from './components/common/Form';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { app } from './firebaseConfig'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Home from './components/Home';


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])

  const handleAction = (id) => {
    console.log(id)
    const authentication = getAuth(app);
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)

        })
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }

  }
  return (

    <div className="App">
      <>
        <Routes>
          <Route path='/login' element={<Form handleAction={() => handleAction(1)} setEmail={setEmail} setPassword={setPassword} title="Login" />} />
          <Route path='/register' element={<Form handleAction={() => handleAction(2)} setEmail={setEmail} setPassword={setPassword} title="Register" />} />
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </>
    </div>

  );
}

export default App;


