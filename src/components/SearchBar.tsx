interface Props {
  handleInput: (query: string) => void;
  // pass in setQuery function from ../App.tsx
}

const SearchBar = ({ handleInput }: Props) => {
  return (
    <>
      <input
        onInput={(e) => {
          handleInput(e.currentTarget.value);
        }}
        placeholder="Search"
        className="
          size-full
          bg-gray-50 
          p-2
          rounded-sm
          text-gray-700 
          inset-shadow-sm/15
          focus:outline-none
          focus:inset-shadow-[0_0_5px_rgba(4,4,4,0.4)]
          focus:transition-shadow duration-250
          wrap-break-word
          overflow-auto
        "
      ></input>
    </>
  );
};

export default SearchBar;
