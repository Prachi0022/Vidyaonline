import React from 'react';
import { useStackCards } from '../../hooks/useStackCards';
import { cn } from '../../../utils/cn';

const StackCardWrapper = ({ children, className, topOffset, gap, initDelay, disabled }) => {
  const { stackCardsProps } = useStackCards({
    topOffset,
    gap,
    initDelay,
    disabled,
  });

  return (
    <div {...stackCardsProps} className={cn(stackCardsProps.className, className)}>
      {children}
    </div>
  );
};

StackCardWrapper.displayName = 'StackCardWrapper';
export default StackCardWrapper;
