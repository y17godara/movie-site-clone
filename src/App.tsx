import Header from './components/Header'
import Slider from './components/Slider'
import Upcoming from './components/Upcoming'


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
          <Upcoming />
        </section>
        <section>
          Main
        </section>
      </main>
    </>
  );
}

export default App;
