import Header from '@components/Header';

import Link from 'next/link';

const MoreNav: React.FC<{}> = () => {
  return (
    <>
      <Header />
        <div className="text-align-center">
          <Link href="/">
              <a href="">Home</a>
          </Link>
          <hr></hr>
          <Link href="/upgrade">
              <a href="">Upgrade</a>
          </Link>
          <hr></hr>
          <Link href="/latst-fearures">
              <a href="">Latest</a>
          </Link>
          <hr></hr>
          <Link href="/">
              <a href="#about">About</a>
          </Link>
        </div>
    </>
  );
};

export default MoreNav;