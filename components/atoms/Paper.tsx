import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface PaperProps {
  children: string | ReactElement;
}

const PaperStyle = styled.div({
  position: 'absolute',
  left: '0%',
  right: '0%',
  top: '0%',
  bottom: '0%',
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
});

export const Paper = (props: PaperProps) => {
  return <PaperStyle>{props.children}</PaperStyle>;
};

export default Paper;
