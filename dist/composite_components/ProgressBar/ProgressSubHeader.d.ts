import React from 'react';
import { Literals } from './ProgressBar';
interface ProgressSubHeaderProps {
    totalSize: string;
    totalTime?: string;
    literals: Literals;
    cancelAll?: Function;
    isCancelAllDisabled: boolean;
}
/**
 * @component Renders the progress subheader component.
 * @param {ProgressSubHeaderProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
declare const ProgressSubHeader: (props: ProgressSubHeaderProps) => React.JSX.Element;
export default ProgressSubHeader;
