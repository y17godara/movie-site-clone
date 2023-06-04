import Header from './components/Header'
import Slider from './components/Slider'
function App() {

  return (
    <>
      <header className='text-white'>
        <Header />
      </header>
      <main className="z-0 h-[300vh]">
        <section>
          <Slider />
        </section>
        <section>
          Main
        </section>
      </main>
    </>
  );
}

export default App;
