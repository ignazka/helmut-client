import React from 'react';
import { useParams } from 'react-router-dom';
function Work() {
  const { image } = useParams();
  console.log(image, useParams());
  return <img src={image} />;
}

export default Work;
