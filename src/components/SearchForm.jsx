import { useGalleryContext } from "../context/galleryContext";

function SearchForm() {
  const { setSearchQuery } = useGalleryContext();

  function handelSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchQuery(searchValue);
  }

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handelSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cars"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
