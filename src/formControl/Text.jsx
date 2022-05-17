
import { Field } from 'redux-form'

import moduleName from './Input.module.css'

export const Input = (props) => {
    const { meta, input, child, ...restProps } = props
    return <FormControl {...props} > <input {...input} {...restProps} /> </FormControl >
}

export const Textarea = (props) => {
    const { meta, input, ...restProps } = props
    return <FormControl {...props} > <textarea {...input} {...restProps} /></FormControl >
}

export function createField(name, type, component, validate, props = {}, text = "") {
    return <div>
        <Field name={name} type={type} component={component} validate={validate} {...props} />
        {text}
    </div>
}

export const FormControl = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div className={(hasError ? moduleName.Input : "")}>
            {children}
            <br />
            {/* {hasError &&<div className={moduleName.span}> {error} </div>} */}
        </div>
    )
}