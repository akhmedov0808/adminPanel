import React from 'react'
import { usePostRequest } from '../hooks/request'
import { FACULTY_LIST } from '../urls'
import FacultyForm from './FacultyForm'


export default function FacultyCreate({ onCancel, reload }) {
    const faculty = usePostRequest({ url: FACULTY_LIST })

    async function onSubmit(data) {
        const { success } = await faculty.request({ data: {
            ...data,
        } })
        if (success) {
            reload.request()
            onCancel()
        }
    }

    return (
        <div>
            <h1 className="title has-text-centered"><b>Add Faculty</b></h1>

            <FacultyForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                faculty={faculty} />
        </div>
    )
}
