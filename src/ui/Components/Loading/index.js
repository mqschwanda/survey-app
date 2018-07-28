import React from 'react';
import LoadingComponents from 'react-loading-components';

const marshalProps = ({
  type = 'bars',
  width = 25,
  height = 25,
  fill = '#000000',
  ...props,
}) => ({ ...props, type, width, height, fill })

const Loading = (props) => <LoadingComponents {...marshalProps(props)} />;

export default Loading;
