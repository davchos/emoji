import "./css/Search.css";

const Search = (props) => {
  const { search, setSearch } = props;
  const handlePatternChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div>
      <h1>CSS is coming soon ......</h1>
      <form>
        <input
          placeholder="grim"
          type="search"
          name="search"
          value={search}
          onChange={handlePatternChange}
        />
      </form>
    </div>
  );
};
export default Search;
