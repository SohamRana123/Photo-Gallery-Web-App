import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="bg-slate-800 min-h-screen w-full">
      <h1 className="text-8xl font-bold text-center text-white p-8 sm:py-8">
        Photo Gallery
      </h1>
      <Gallery />
    </div>
  );
};

export default App;
