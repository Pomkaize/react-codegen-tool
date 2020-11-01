import { styled } from '@fluentui/react';

import { ComponentBase } from './Component.base';
import { getStyles } from './Component.styles';

import {
    IComponentProps,
    IComponentStyleProps,
    IComponentStyles,
} from './Component.types';

const Component = styled<IComponentProps, IComponentStyleProps, IComponentStyles>(
    ComponentBase,
    getStyles
);

export { Component };
