import React from 'react'
import { usePutRequest } from '../hooks/request'
import { FACULTY_DETAIL } from '../urls'
import FacultyForm from './FacultyForm'

export default function FacultyUpdate({ hideModal, item, reload }) {
    const facultyUpdate = usePutRequest({ url: FACULTY_DETAIL.replace('{id}', item.id) })

    async function onSubmit(data) {
        const { success } = await facultyUpdate.request({ data: { ...data } })
        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <div>
            <h1 className="title has-text-centered"><b>Edit Faculty</b></h1>

            <FacultyForm
                onCancel={hideModal}
                initialValues={item}
                onSubmit={onSubmit} />
        </div>
    )
}
