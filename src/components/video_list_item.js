import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <Paper>
        <Grid className="video-list media">
          <Grid className="media-left">
            <img className="media-object" src={imageUrl} />
          </Grid>
          <Paper className="media-body">
            <Typography className="media-heading">
              {video.snippet.title}
            </Typography>
          </Paper>
        </Grid>
      </Paper>
    </li>
  );
};

export default VideoListItem;
