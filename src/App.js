import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';


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
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
};

export default App;
