import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage  from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFountPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
<NavBar/>     <div id="page-body">
       <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/articles/:articleId" element={<ArticlePage/>}/>
        <Route path="/articles" element={< ArticlesListPage/>}/>  
        <Route path="*" element={< NotFoundPage/>}/>  
        </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
