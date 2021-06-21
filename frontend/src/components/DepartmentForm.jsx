import React from 'react'
import { Form, Formik } from 'formik'
import Button from './common/Button'
import { required } from '../utils/validators'
import Input from './common/Input'
import Select from './common/Select'

export default function DepartmentForm({ showUpdate, onSubmit, onCancel, faculty, initialValues = {} }) {
    return (
        <Formik onSubmit={onSubmit} initialValues={{ ...initialValues }}>
            <Form>
                {showUpdate
                    ? <h1 className="title has-text-centered"><b>Edit Department</b></h1>
                    : <h1 className="title has-text-centered"><b>Add Department</b></h1>}
                <Input name="name" label="Name" validate={required} />
                <Select
                    name="faculty"
                    label="Faculty"
                    validate={required}
                    options={faculty}
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
