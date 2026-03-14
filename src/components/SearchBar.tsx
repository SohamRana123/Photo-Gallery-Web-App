interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className="mb-6 w-full flex justify-center">
      <input
        type="text"
        placeholder="Search by author"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="w-full p-4 rounded-full text-white outline-none border-none bg-slate-500"
      />
    </div>
  );
};

export default SearchBar;
