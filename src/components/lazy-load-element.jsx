import * as React from 'react';

const ListItem = (props) => {
  
  return (
    <div className="infinite-list-item">
      List Item {props.element}
    </div>
  );

};

export default ListItem;
