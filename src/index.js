import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import _ from 'lodash';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyAjik3pVy2w9ehRBcToBxexMLC556PshY0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this._onVideoSearch('Infinity war');
  }


  render() {
    const videoSearch = _.debounce((term) => {this._onVideoSearch(term)}, 300);

    return (
      <div>
        <SearchBar
          onSearch={videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this._onVideoSelect}
        />
      </div>
    );
  }

  _onVideoSelect = (selectedVideo) => {
    this.setState({selectedVideo});
  }

  _onVideoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
