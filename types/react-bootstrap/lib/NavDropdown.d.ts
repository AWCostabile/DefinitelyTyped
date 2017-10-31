import * as React from 'react';
import { DropdownBaseProps } from './Dropdown';

declare namespace NavDropdown {
    export interface NavDropdownBaseProps extends DropdownBaseProps {
        active?: boolean;
        noCaret?: boolean;
        eventKey?: any;
        title?: JSX.Element | string;
    }

    export type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;
}
declare class NavDropdown extends React.Component<NavDropdown.NavDropdownProps> { }
export = NavDropdown;
