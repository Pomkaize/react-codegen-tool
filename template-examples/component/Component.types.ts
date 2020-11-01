import { IStyle, IStyleFunctionOrObject } from '@fluentui/react';

export interface IComponentStyleProps {
    className?: string;
}

export interface IComponentStyles {
    root?: IStyle;
}

export interface IComponentProps {
    className?: string;
    styles?: IStyleFunctionOrObject<IComponentStyleProps, IComponentStyles>;
}
