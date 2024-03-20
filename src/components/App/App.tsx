import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import MindMap from '../MindMap/MindMap';
import Questions from '../Questions/Questions';
import { Main } from './App.styled';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <Banner />
        <MindMap />
        <Questions />
      </Main>
      <Footer />
    </>
  );
}

export default App;
