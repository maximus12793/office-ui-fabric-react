import { styled } from '../../Utilities';
import {
  IBreadcrumbProps
} from './Breadcrumb.types';
import { BreadcrumbBase } from './Breadcrumb.base';
import { getStyles } from './Breadcrumb.styles';
import { Crumb } from './Crumb';

// Create a Breadcrumb variant which uses these default styles and this styled subcomponent.
export const Breadcrumb: (props: IBreadcrumbProps) => JSX.Element = styled(
  BreadcrumbBase,
  getStyles,
  props => ({
    crumbAs: Crumb
  })
);
