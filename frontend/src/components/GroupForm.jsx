import React from 'react'
import { Form, Formik } from 'formik'
import Button from './common/Button'
import { required } from '../utils/validators'
import Input from './common/Input'
import Select from './common/Select'

export default function GroupForm({ onSubmit, onCancel, department, initialValues = {} }) {
    return (
        <Formik onSubmit={onSubmit} initialValues={{ name: '', ...initialValues }}>
            <Form>
                <h1 className="title has-text-centered"><b>Add Group</b></h1>
                <Input name="name" label="Name" validate={required} />
                <Select
                    name="group"
                    label="Departments"
                    validate={required}
                    options={department.response}
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
