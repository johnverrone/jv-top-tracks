import { LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import { SpotifyPlayer } from '~/components/SpotifyPlayer';
import tracksStyles from '~/styles/tracks2022.css';
import { getTracks, Track } from '~/tracks';

export const links = () => [{ rel: 'stylesheet', href: tracksStyles }];

export const loader: LoaderFunction = () => {
  return getTracks('2022');
};

export const meta: MetaFunction = () => {
  return {
    title: "jv's bops | tracks",
    description: "jv's top tracks",
  };
};

export default function Tracks() {
  const tracks = useLoaderData<Track[]>();
  return (
    <div className="wrapper">
      <ul>
        {tracks.map((track, i) => (
          <li key={track.title}>
            {track.title}
            {track.spotify ? (
              <SpotifyPlayer spotifyId={track.spotify} large={i < 1} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
