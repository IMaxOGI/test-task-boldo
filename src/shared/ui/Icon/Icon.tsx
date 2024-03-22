import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import { IconName } from '@/shared/const/icons';
import { TIconName } from '@/shared/types';

interface IconProps {
  className?: string;
  name: TIconName;
}

export const Icon: React.FC<IconProps> = ({ className, name }) => {
  if (name === IconName['logo']) {
    return <Logo className={className} />;
  }
};
