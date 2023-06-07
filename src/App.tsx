import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Content from './components/MiniSwipper'
import Page from './Page'

function App() {

  return (
    <>
      <header className='text-white'>
        <Header />
      </header>
      <main className="flex flex-col gap-2 md:gap-6 xl:gap-10 z-0 h-full pt-[80px] md:pt-[100px] px-4 md:px-8 xd:px-16">
        <section>
          <Slider />
        </section>
        <section>
          <Content />
        </section>
        <section>
          <Page />
        </section>
      </main>

      <footer className='flex flex-col mt-10'>
       <Footer />
      </footer>
    </>
  );
}

export default App;
