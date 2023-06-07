import Movies from './components/Sliders/Movies';
import TvShows from './components/Sliders/TvShows';

function Page() {
  return (
    <>
        <div className='flex flex-col gap-2 md:gap-5">'>
            <Movies />
            <TvShows />
        </div>
    </>
  )
}

export default Page;