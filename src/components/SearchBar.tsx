import AnimeflixIcon from '@components/AnimeFlixIcon';

const SearchBar: React.FC<{}> = () => {
  //   const router = useRouter();

  //   const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
  //     event
  //   ) => {
  //     if (event.key === 'Enter')
  //       router.push(`/search?keyword=${event.currentTarget.value}`);
  //   };

  return (
    <>
      <div className="items-center">
        <AnimeflixIcon className="mt-10 h-7 w-7 cursor-pointer sm:ml-6" />
        <h1 className="mt-10 text-white">Under Development Process</h1>
      </div>
    </>
  );
};

export default SearchBar;
