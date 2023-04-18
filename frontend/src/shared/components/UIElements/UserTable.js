import React from 'react';

// import './Card.css';

const UserTable = props => {
  return (
    <tr>
      {props.children}
    </tr>
  );
};

export default UserTable;
