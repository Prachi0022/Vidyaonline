import { cn } from '@/utils/cn';

const LinkButton = ({ children, href, className, insideSpan = true, ...props }) => {
  return (
    <a href={href} className={cn('btn btn-md', className)} {...props}>
      {insideSpan ? <span>{children}</span> : children}
    </a>
  );
};

LinkButton.displayName = 'LinkButton';
export default LinkButton;
