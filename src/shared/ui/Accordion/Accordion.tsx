import React, { useState } from 'react';
import s from './Accordion.module.scss';
import cn from 'classnames';
import { Icon } from '@/shared/ui/Icon';
import { CSSTransition } from 'react-transition-group';

interface AccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ className, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(s.Accordion, className)}>
      <button
        type="button"
        className={s.Accordion__title}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {title}
        <span className={cn(s.Accordion__icon, { [s['Accordion__icon--open']]: isOpen })}>
          <Icon name="chevron" />
        </span>
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: s.Accordion__contentEntering,
          enterActive: s.Accordion__contentEntered,
          exit: s.Accordion__contentExiting,
          exitActive: s.Accordion__contentExited,
        }}
        unmountOnExit
      >
        <div className={s.Accordion__content}>{children}</div>
      </CSSTransition>
    </div>
  );
};
