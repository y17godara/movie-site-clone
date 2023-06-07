import Header from './components/Header'
import Slider from './components/Slider'
import Content from './components/Content'


function App() {

  return (
    <>
      <header className='text-white'>
        <Header />
      </header>
      <main className="z-0 h-[300vh] pt-[60px] md:pt-[100px]">
        <section>
          <Slider />
        </section>
        <section>
          <Content />
        </section>
        <section>
          Main
        </section>
      </main>
    </>
  );
}

export default App;
