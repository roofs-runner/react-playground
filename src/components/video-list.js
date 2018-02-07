import React, {Component} from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, i) => {

    return (
      <VideoListItem
        onVideoClick={props.onVideoSelect}
        video={video}
        key={i}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
