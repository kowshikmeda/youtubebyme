import React from 'react';

const Videocard = ({ info }) => {
  if (!info || !info.snippet) return null; // Handle missing data

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-86 p-2 m-2 rounded-xl hover:scale-105 transition-transform duration-300">
      {/* Thumbnail */}
      <img className="rounded-lg w-full h-44 object-cover" alt="thumbnail" src={thumbnails?.medium?.url} />

      {/* Video Details */}
      <div className="mt-2 flex">
        
        <div className="text-sm">
          <h3 className="font-semibold text-gray-900 line-clamp-2 p-1">{title}</h3>
          <p className="text-gray-600 text-xs p-1">{channelTitle}</p>
          <p className="text-gray-500 text-xs p-1npm ">{Number(statistics?.viewCount).toLocaleString()} views</p>
        </div>
      </div>
    </div>
  );
};

export const AdvideoCard = ({ info }) => {
  return (
    <div className="p-1 m-2 border-2 border-red-600 rounded-xl">
      <Videocard info={info} />
    </div>
  );
};

export default Videocard;
