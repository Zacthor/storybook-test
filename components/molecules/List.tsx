import React from 'react';

import Label from '../atoms/Label';

interface ListProps {
  items: string[];
}

export const List = (props: ListProps) => {
  return (
    <>
      {props.items.map(item => (
        <Label>{item}</Label>
      ))}
    </>
  );
};

export default List;
