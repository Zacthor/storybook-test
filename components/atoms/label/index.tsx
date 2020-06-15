import React, { ReactElement } from 'react';
//import styles from './label.css';

interface LabelProps {
  children: string | ReactElement;
  stuff?: string;
}

export const Label = (props: LabelProps) => {
  const { children, stuff } = props;

  return (
    <div>
      {children}
      {stuff ? stuff : ''}
    </div>
  );
};

export default Label;
