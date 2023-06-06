import Header from './components/Header'
import Slider from './components/Slider'
import Category from './components/Category'
function App() {

  return (
    <>
      <header className='text-white'>
        <Header />
      </header>
      <main className="z-0 h-[300vh] pt-[65px] md:pt-[100px]">
        <section>
          <Slider />
        </section>
        <section>
          <Category />
        </section>
        <section>
          Main
        </section>
      </main>
    </>
  );
}

export default App;
