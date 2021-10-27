import React from 'react';

const HomeModule = (props) => {
  const { title, moduleType } = props;
  return (
    <div className="card text-center container">
      <div className="card-body">
        <h4 className="card-title"> {props.title} </h4>
        <hr />
        {props.moduleType}
      </div>
    </div>
  );
};

export default HomeModule;
