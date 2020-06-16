import React from 'react';

import Label from '../../atoms/label';

interface ListProps {
  items: string[];
}

export const List = (props: ListProps) =>
  props.items.map(item => <Label>{item}</Label>);
