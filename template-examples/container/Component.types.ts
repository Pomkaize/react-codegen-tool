import { IStyle, IStyleFunctionOrObject } from '@fluentui/react';

export interface IComponentStyleProps {
    className?: string;
}

export interface IComponentStyles {
    root?: IStyle;
}

export interface IBaseComponentProps {
    className?: string;
    styles?: IStyleFunctionOrObject<IComponentStyleProps, IComponentStyles>;
}

export interface IMapComponentProps {}

export interface IDispatchComponentProps {}

export interface IComponentProps extends IMapComponentProps, IDispatchComponentProps, IBaseComponentProps {}
