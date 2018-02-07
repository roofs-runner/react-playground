import React, {Component} from 'react';

const VideoListItem  = ({video, onVideoClick}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li
      className="list-group-item"
      onClick={() => onVideoClick(video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
      </div>

      <div className="media-body">
        {title}
        <div className="media-heading">
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;