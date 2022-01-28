import Header from './containers/pages/Systems/header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Blog from './containers/pages/Blog';
import About from './containers/pages/About';
import LogIn from './containers/pages/LogIn';
import BlogDetails from './containers/pages/Systems/BlogDetails';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/post/:id' element={<BlogDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
