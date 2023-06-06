const links = [
  {
    id: 1,
    name: "Movies",
    path: "/movies",
    img: "https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  },
  {
    id: 2,
    name: "TV Shows",
    path: "/tv-shows",
    img: "https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  },
  {
    id: 3,
    name: "Kids",
    path: "/kids",
    img: "https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  },
  {
    id: 4,
    name: "Documentaries",
    path: "/documentaries",
    img: "https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  },
  {
    id: 5,
    name: "Adults",
    path: "/adults",
    img: "https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  }
];

function Category() {
  return (
    <>
      <div className="flex gap-2 md:gap-5 py-2 px-4 md:px-16 scroll-smooth scrollbar-none">
        {links.map((links) => (
            <div className="border border-zinc-700 rounded-md md:hover:scale-110 transition-all duration-300">
            <img src={links.img} alt={links.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
