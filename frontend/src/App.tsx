import React from 'react';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//Components
import Header from "./components/headerComponents/Header";
import Home from "./components/homeComponents/Home";
import Search from "./components/searchComponents/Search";
import List from "./components/listComponents/List";
import Detail from "./components/detailComponents/Detail";
import NotFound from "./components/utilComponents/NotFound";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        {/* routing設定 */}
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/detail">Detail</Link>
        <Button variant="contained">MUIボタン使用テスト</Button>
        <p>マテリアルICON表示テスト</p>
        <div className='wrap'>
          <div className='icon_area'>
            <TwitterIcon className='icon' />
            <span className='icon_text'>Twitter</span>
          </div>
          <hr />
          <div className='icon_area'>
            <InstagramIcon className='icon' />
            <span className='icon_text'>Instagram</span>
          </div>
          <hr />
          <div className='icon_area'>
            <EmailIcon className='icon' />
            <span className='icon_text'>メールアドレス</span>
          </div>
          <hr />
        </div>
      {/* routing先 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
