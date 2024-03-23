import React from 'react';
import { IconName } from '@/shared/const/icons';
import { TIconName } from '@/shared/types';
import Logo from '../../assets/icons/logo.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';

interface IconProps {
  className?: string;
  name: TIconName;
}

export const Icon: React.FC<IconProps> = ({ className, name }) => {
  if (name === IconName['logo']) {
    return <Logo className={className} />;
  }
  if (name === IconName['arrow-right']) {
    return <ArrowRightIcon className={className} />;
  }
};
