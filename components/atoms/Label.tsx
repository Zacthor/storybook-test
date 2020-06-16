import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface LabelProps {
  children: string | ReactElement;
  center?: boolean;
  color?: string;
}
interface StyleProps {
  textAlign?: 'center';
  color?: string;
}

const StyleWrapDiv = styled.div((props: LabelProps) => {
  const result: StyleProps = {};
  if (props.color) {
    result.color = props.color;
  }
  if (props.center) {
    result.textAlign = 'center';
  }

  return { ...result };
});

export const Label = (props: LabelProps) => {
  const { children } = props;

  return <StyleWrapDiv {...props}>{children}</StyleWrapDiv>;
};

export default Label;
