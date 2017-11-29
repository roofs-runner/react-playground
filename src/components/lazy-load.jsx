import React, { Component } from 'react';
import LazyLoad from 'react-infinite';
import ListItem from './lazy-load-element';

export default class InfiniteList extends Component {
  constructor() {
    super();
    
    this.state = {
      items: this.buildElements(0, 20),
      isInfiniteLoading: false
    }
  }
  
  render() {
    return (
      <LazyLoad
        elementHeight={40}
        containerHeight={250}
        infiniteLoadingBeginBottomOffset={200}
        onInfiniteLoad={this.handleInfiniteLoad}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}
      >
      {this.state.items}
        {console.log(this.state.items)}
    </LazyLoad>
    )
  }
  
  buildElements = (start, end) => {
    let elements = [];
    
    debugger;
    
    console.log('I am inside buildElements');
    
    
    for (let i = start; i < end; i++) {
      elements.push(<ListItem key={i} element={i}/>)
    }
    return elements;
  };
  
  handleInfiniteLoad = () => {
    
    this.setState({
      isInfiniteLoading: true
    });
    
    debugger;
    
    setTimeout(() => {
      const elemLength  = this.state.elements.length,
            newElements = this.buildElements(elemLength, elemLength + 20);
      
      this.setState({
        isInfiniteLoading: false,
        items         : this.state.items.concat(newElements)
      });
    }, 2500);
  };
  
  elementInfiniteLoad = () => {
    return <div className="infinite-list-item">
      Loading...
    </div>;
  }
};
