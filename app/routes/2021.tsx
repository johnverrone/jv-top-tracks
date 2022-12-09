import { MetaFunction, useLoaderData } from 'remix';
import { motion, transform, useMotionValue } from 'framer-motion';
import converter from 'number-to-words';
import { SpotifyPlayer } from '~/components/SpotifyPlayer';
import { Track, getTracks } from '~/tracks';
import tracksStyles from '~/styles/tracks.css';
import { useEffect, useRef, useState } from 'react';

export const links = () => [{ rel: 'stylesheet', href: tracksStyles }];

export const loader = () => {
  return getTracks('2021');
};

export const meta: MetaFunction = () => {
  return {
    title: "jv's bops | tracks",
    description: "jv's top tracks",
  };
};

export default function Tracks() {
  const tracks = useLoaderData<Track[]>();
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pos = useMotionValue<number[]>([]);
  const [opacityValues, setOpacityValues] = useState<number[]>([]);

  const handleScroll = () => {
    pos.set([
      ...itemRefs.current.map((item) => item?.getBoundingClientRect().y ?? 0),
    ]);
    const newOpacity = pos.get().map((p) => transform(p, [290, 0], [1, 0]));
    setOpacityValues(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wrapper">
      <div className="intro">
        <h2>ahh yee. music week 2021 is here.</h2>
        <br />
        <p>
          stoked you're here to check out the pop bops, tiktok trends, and sad
          boi rock that's been pumpin thru my brain this year.
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
          <b>jv</b>
        </p>
      </div>
      <motion.ol className="track-list">
        {tracks.map((track, idx) => {
          const rank = idx + 1;
          const { title, artist, spotify, notes } = track;
          const opacity = opacityValues[idx];

          return (
            <motion.li
              className="track"
              key={track.title}
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              viewport={{ margin: '20px 0px -200px 0px' }}
            >
              <div className="track-metadata">
                <motion.span className="rank" style={{ opacity }}>
                  {converter.toWords(rank)}
                </motion.span>
                <span className="title">{title}</span>
                <span className="artist">{artist}</span>
                {spotify && (
                  <div
                    className="spotify-player"
                    ref={(el) => (itemRefs.current[idx] = el)}
                  >
                    <SpotifyPlayer spotifyId={spotify} large={idx < 5} />
                  </div>
                )}
              </div>
              {notes && (
                <div className="listeners-notes-wrapper">
                  <h4 className="listener-title">jv's notes</h4>
                  <p className="listeners-notes">{notes}</p>
                </div>
              )}
              <hr className="divider" />
            </motion.li>
          );
        })}
      </motion.ol>
      <div className="playlist-recap">
        <p>
          hope you enjoyed.
          <br />
          access to the full playlist here:
        </p>
        <ul className="playlist-links">
          <li>
            <a href="https://open.spotify.com/playlist/0OTdOWfMSlXzqWmEMiyYOQ">
              spotify
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
