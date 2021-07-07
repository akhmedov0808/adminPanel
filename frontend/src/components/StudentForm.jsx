import React from 'react'
import { Form, Formik } from 'formik'
import Button from './common/Button'
import { required } from '../utils/validators'
import Input from './common/Input'
import Select from './common/Select'

export default function StudentForm({ onSubmit, onCancel, group, initialValues = {} }) {
    return (
        <Formik onSubmit={onSubmit} initialValues={{ name: '', ...initialValues }}>
            <Form>
                <Input name="name" label="First name" validate={required} />
                <Input name="lastName" label="Last name" validate={required} />
                <Input name="patronymic" label="Patronymic" validate={required} />
                <Input type='number' name="age" label="Age" validate={required} />

                <Select
                    name="group"
                    label="Groups"
                    validate={required}
                    options={group.response}
                />
                <div className="is-pulled-right">
                    <Button
                        onClick={onCancel}
                        icon="close-outline"
                        text="Cancel"
                        className="is-danger" />&nbsp;&nbsp;

                    <Button
                        text="Save"
                        icon="add-outline"
                        type="submit"
                        className="is-info" />
                </div>
            </Form>
        </Formik>
    )
}
