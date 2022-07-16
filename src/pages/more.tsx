import Link from 'next/link';

import Header from '@components/Header';

const MoreNav: React.FC<{}> = () => {
  return (
    <>
      <Header />
        <div className="text-align-center">
          <Link href="/">
              <a href="">Home</a>
          </Link>
          <Link href="/upgrade">
              <a href="">Upgrade</a>
          </Link>
          <Link href="/latst-fearures">
              <a href="">Latest</a>
          </Link>
          <Link href="/">
              <a href="#about">About</a>
          </Link>
        </div>
    </>
  );
};

export default MoreNav;