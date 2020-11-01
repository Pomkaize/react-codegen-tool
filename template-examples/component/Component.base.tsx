import React from 'react';
import { classNamesFunction } from '@fluentui/react';

import {
    IComponentStyleProps,
    IComponentStyles,
    IComponentProps
} from './Component.types';

interface IComponentState {}

const getClassNames = classNamesFunction<IComponentStyleProps, IComponentStyles>();

class ComponentBase extends React.PureComponent<IComponentProps, IComponentState> {
    getClassNames = () => {
        const { styles, className } = this.props;

        return getClassNames(styles, { className });
    }

    render() {
        const classNames = this.getClassNames();

        return <div className={classNames.root} />
    }
}

export { ComponentBase };
