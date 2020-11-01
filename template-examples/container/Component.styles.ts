import { getTheme } from '@fluentui/react';

import { IComponentStyleProps, IComponentStyles } from './Component.types';

const theme = getTheme();

export const customGlobalClassNames: Record<keyof IComponentStyles, string> = {
    root: 'ms-custom-Component',
};

export const getStyles = (props: IComponentStyleProps): IComponentStyles => {
    const { className } = props;

    return {
        root: [
            customGlobalClassNames.root,
            className,
        ],
    };
};
