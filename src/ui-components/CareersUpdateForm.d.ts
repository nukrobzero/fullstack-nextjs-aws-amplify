/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Careers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CareersUpdateFormInputValues = {
    title?: string;
    slug?: string;
    content?: string;
    description?: string;
    jobtype?: string;
    status?: string;
    createdAt?: string;
};
export declare type CareersUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    jobtype?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CareersUpdateFormOverridesProps = {
    CareersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    jobtype?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CareersUpdateFormProps = React.PropsWithChildren<{
    overrides?: CareersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    careers?: Careers;
    onSubmit?: (fields: CareersUpdateFormInputValues) => CareersUpdateFormInputValues;
    onSuccess?: (fields: CareersUpdateFormInputValues) => void;
    onError?: (fields: CareersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CareersUpdateFormInputValues) => CareersUpdateFormInputValues;
    onValidate?: CareersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CareersUpdateForm(props: CareersUpdateFormProps): React.ReactElement;
