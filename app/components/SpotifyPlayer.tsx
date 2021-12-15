import React from 'react';

interface SpotifyPlayerProps {
  spotifyId: string;
}

export const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ spotifyId }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`}
      width="100%"
      height="380"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
};
