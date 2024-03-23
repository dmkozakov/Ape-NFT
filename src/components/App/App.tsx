import About from '../About/About';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import Header from '../HeaderSection/Header/Header';
import Hero from '../Hero/Hero';
import MindMap from '../MindMapSection/MindMap/MindMap';
import Questions from '../QuestionsSection/Questions/Questions';
import { Main } from './App.styled';
import ContactUs from '../ContactUsSection/ContactUs/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
        <Collection />
        <ContactUs />
      </Main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
