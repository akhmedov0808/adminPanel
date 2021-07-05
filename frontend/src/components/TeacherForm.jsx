import React from 'react'
import { Form, Formik } from 'formik'
import Button from './common/Button'
import { required } from '../utils/validators'
import Input from './common/Input'
import MultiSelect from './common/MultiSelect'

export default function TeacherForm({ onSubmit, onCancel, group, initialValues = {} }) {
    const groups = Object.entries(group.response).map(([, { id, name }]) => ({ value: id, label: name }))

    return (
        <Formik onSubmit={onSubmit} initialValues={{ name: '',
            ...initialValues,
            group: initialValues.group ? (
                initialValues.group.map((item) => ({ value: item.id, label: item.name }))
            ) : [] }}>
            <Form>
                <Input name="name" label="Name" validate={required} />
                <MultiSelect
                    name="group"
                    label="Groups"
                    validate={required}
                    options={groups}
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
