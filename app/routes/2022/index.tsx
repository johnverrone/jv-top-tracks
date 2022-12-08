import { Link, MetaFunction } from 'remix';
import indexStyles from '~/styles/index.css';

export const links = () => [{ rel: 'stylesheet', href: indexStyles }];

export const meta: MetaFunction = () => {
  return {
    title: "jv's bops",
    description: "jv's top music of 2021",
  };
};

export default function Index() {
  return (
    <main>
      <h2>twenty twenty two</h2>
      <br />
      <p>
        enjoy,
        <br />
        <br />
        jv
      </p>
      <div className="begin-button">
        <Link to="/2022/tracks">begin &gt;</Link>
      </div>
    </main>
  );
}
