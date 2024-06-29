
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
  
<Routes>
<Route path='/'  element={<Home/>}/>
<Route path='/about'  element={<About/>}/>
<Route path='/article/:name'  element={<Article/>}/>
<Route path='/articles-list' element={<ArticlesList/>}/>
</Routes>
</div>

 </Router>
   
  );
}

export default App;
 