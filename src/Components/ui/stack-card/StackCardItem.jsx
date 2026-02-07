import React from 'react';
import { cn } from '../../../utils/cn';

const StackCardItem = ({ children, className }) => {
  if (!children || !children.props) {
    return null;
  }

  return React.cloneElement(children, {
    className: cn('js-stack-cards__item', children.props.className || '', className),
  });
};

StackCardItem.displayName = 'StackCardItem';
export default StackCardItem;
