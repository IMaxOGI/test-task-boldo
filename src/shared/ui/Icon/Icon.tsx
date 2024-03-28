import React from 'react';
import { IconName } from '@/shared/const/icons';
import { TIconName } from '@/shared/types';
import Logo from '../../assets/icons/logo.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import CheckIcon from '../../assets/icons/check.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import SunIcon from '../../assets/icons/sun.svg';
import FeatherIcon from '../../assets/icons/feather.svg';
import ChevronIcon from '../../assets/icons/chevron-down.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import CrossIcon from '../../assets/icons/cross.svg';

interface IconProps {
  className?: string;
  name: TIconName;
}

export const Icon: React.FC<IconProps> = ({ className, name }) => {
  if (name === IconName['logo']) {
    return <Logo className={className} />;
  }
  if (name === IconName['arrow']) {
    return <ArrowRightIcon className={className} />;
  }
  if (name === IconName['check']) {
    return <CheckIcon className={className} />;
  }
  if (name === IconName['eye']) {
    return <EyeIcon className={className} />;
  }
  if (name === IconName['sun']) {
    return <SunIcon className={className} />;
  }
  if (name === IconName['feather']) {
    return <FeatherIcon className={className} />;
  }
  if (name === IconName['chevron']) {
    return <ChevronIcon className={className} />;
  }
  if (name === IconName['menu']) {
    return <MenuIcon className={className} />;
  }
  if (name === IconName['cross']) {
    return <CrossIcon className={className} />;
  }
};
