import Header from './containers/pages/Systems/header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Blog from './containers/pages/Blog';
import About from './containers/pages/About';
import LogIn from './containers/pages/LogIn';
import BlogDetails from './containers/pages/Systems/BlogDetails';
import SignUp from './containers/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path='/sig-in' element={<LogIn/>}/>
          <Route path='/post/:id' element={<BlogDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
