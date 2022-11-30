import Home from './pages/homepage';
import HomeTwo from './pages/home-two';
import HomeThree from './pages/home-three';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import About from 'pages/about';
import Service from 'pages/services';
import Faq from 'pages/faq';
import Team from 'pages/team';
import Projects from 'pages/projects';
import Pricing from 'pages/pricing';
import NotFound from 'pages/404';
import News from 'pages/news';
import Contact from 'pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/index-two' element={<HomeTwo/>}/>
        <Route path='/index-three' element={<HomeThree/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
