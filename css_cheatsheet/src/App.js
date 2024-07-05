import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function Layout() {
  return <div></div>;
}

function Blogs() {
  return <h1>Blogs</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function Contact() {
  return <h1> Contact</h1>;
}

function NoPage() {
  return <h1>NoPage</h1>;
}

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
