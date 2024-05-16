import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import DataMining from './pages/Services/DataMining';
import DataMigration from './pages/Services/DataMigration';
import DataTransformation from './pages/Services/DataTransformation';
import DocumentConversion from './pages/Services/DocumentConversion';
import WebDevelopment from './pages/Services/WebDevelopment';
import Enterprise from './pages/Services/Enterprise';
import Microservices from './pages/Products/Microservices';
import Blogs from './pages/Blogs/Blogs';
import EditorTable from './pages/Editor/Editor';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavigationBar />      
        <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/services/datamining' element={<DataMining/>} />
        <Route path='/services/datamigration' element={<DataMigration/>} />
        <Route path='/services/datatransformation' element={<DataTransformation/>} />
        <Route path='/services/documentconversion' element={<DocumentConversion/>} />
        <Route path='/services/webdevelopment' element={<WebDevelopment/>} />
        <Route path='/services/enterprise' element={<Enterprise/>} />
        <Route path='/products/microservices' element={<Microservices/>} />  
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/editor' element={<EditorTable/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
