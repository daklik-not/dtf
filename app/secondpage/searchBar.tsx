

export default function SearchBar() {
    return (
      <form className='  p-5 '>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }

