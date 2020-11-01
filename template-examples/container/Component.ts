import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { styled } from '@fluentui/react';

import { IStore } from 'store/types';

import { ComponentBase } from './Component.base';
import { getStyles } from './Component.styles';

import {
    IComponentProps,
    IComponentStyleProps,
    IComponentStyles,
    IMapComponentProps,
    IBaseComponentProps,
    IDispatchComponentProps
} from './Component.types';

const StyledComponent = styled<IComponentProps, IComponentStyleProps, IComponentStyles>(
    ComponentBase,
    getStyles
);

const mapStateToProps: MapStateToProps<IMapComponentProps, IBaseComponentProps, IStore> = state => {
    return {};
}

const mapDispatchToProps: MapDispatchToProps<IDispatchComponentProps, IBaseComponentProps> = (dispatch) => {
    return {}
}

const Component = connect(mapStateToProps, mapDispatchToProps)(StyledComponent);

export { Component };
