import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = () => {
  return <h1>I am the shop !</h1>
}


function App() {
  return (
    <Routes>
      {/* navigation bar is parent to home, shop, signin: / is home path idex=true to home component */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
