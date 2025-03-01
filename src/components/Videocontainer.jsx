import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import Videocard, { AdvideoCard } from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null); // Token for pagination
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVideos();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVideos = async () => {
    if (loading) return;
    setLoading(true);

    let url = YOUTUBE_VIDEO_API;
    if (pageToken) url += `&pageToken=${pageToken}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...json.items]); // Append new videos
      setPageToken(json.nextPageToken); // Save next page token
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
      !loading
    ) {
      getVideos(); // Fetch more videos when reaching bottom
    }
  };

  return (
    <div className="flex flex-wrap px-8 pt-4">
      {videos.length > 0 && <AdvideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <Videocard key={video.id} info={video} />
        </Link>
      ))}
      {loading && <p className="text-center w-full">Loading...</p>}
    </div>
  );
};

export default Videocontainer;
