import { Link, MetaFunction } from 'remix';
import { useRef } from 'react';
import indexStyles from '~/styles/index.css';

export const links = () => [{ rel: 'stylesheet', href: indexStyles }];

export const meta: MetaFunction = () => {
  return {
    title: "jv's bops",
    description: "jv's top music of 2021",
  };
};

export default function Index() {
  const dragRef = useRef(null);
  return (
    <main>
      <h2>ahh yee. music week 2021 is here.</h2>
      <br />
      <p>
        stoked you're here to check out the pop bops, tiktok trends, and sad boi
        rock that's been pumpin thru my brain this year.
      </p>
      <br />
      <p>
        this whole website might seem over the top. but u kno i gotta keep it
        spicy 🌶
      </p>
      <br />
      <p>
        enjoy,
        <br />
        <br />
        jv
      </p>
      <div className="begin-button">
        <Link to="/tracks">begin &gt;</Link>
      </div>
    </main>
  );
}
