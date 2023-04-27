/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CareersCreateFormInputValues = {
    title?: string;
    slug?: string;
    content?: string;
    description?: string;
    jobtype?: string;
    status?: string;
    createdAt?: string;
};
export declare type CareersCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    jobtype?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CareersCreateFormOverridesProps = {
    CareersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    jobtype?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CareersCreateFormProps = React.PropsWithChildren<{
    overrides?: CareersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CareersCreateFormInputValues) => CareersCreateFormInputValues;
    onSuccess?: (fields: CareersCreateFormInputValues) => void;
    onError?: (fields: CareersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CareersCreateFormInputValues) => CareersCreateFormInputValues;
    onValidate?: CareersCreateFormValidationValues;
} & React.CSSProperties>;
export default function CareersCreateForm(props: CareersCreateFormProps): React.ReactElement;
