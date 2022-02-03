import Header from './containers/pages/Systems/header'
import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {  Blog, About, SignUp, LogIn,BlogDetails} from './containers/pages'
import ProtectedRoutes from './containers/ProtectedRoutes';
import {UserHome,AddPost,UpdatePost,DeletePost} from './containers/privatePages'
import {useDispatch,useSelector} from 'react-redux';
import {login} from './redux/actions/product.actions'


function App() {
  const blog=useSelector(state=>state.Log);
  const dispach=useDispatch()
  useEffect(()=>{if(localStorage.getItem("wasLogIn")==="true")
  {
    
    dispach(login())
  }},[]);
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
          <Route element={<ProtectedRoutes/>}>
              <Route path='/user/home' element={<UserHome/>}/>
              <Route path='/user/post/add' element={<AddPost/>}/>
              <Route path='/user/post/update' element={<UpdatePost/>}/>
              <Route path='/user/post/delete' element={<DeletePost/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
