import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface LabelProps {
  children: string | ReactElement;
  center?: boolean;
}

const LabelWrap = styled.div({
  color: 'red',
});

const Centered = styled.div((props: LabelProps) => {
  return props.center ? { textAlign: 'center' } : {};
});

export const Label = (props: LabelProps) => {
  const { children, center } = props;

  return (
    <LabelWrap>
      <Centered center={center}>{children}</Centered>
    </LabelWrap>
  );
};

export default Label;
