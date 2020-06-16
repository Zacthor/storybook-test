import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface LabelProps {
  children: string | ReactElement;
  stuff?: string;
}

const LabelWrap = styled.div({
  color: 'red',
});

export const Label = (props: LabelProps) => {
  const { children, stuff } = props;

  return (
    <LabelWrap>
      {children}
      {stuff ? stuff : ''}
    </LabelWrap>
  );
};

export default Label;
