import React from 'react'
import { usePostRequest } from '../hooks/request'
import { STUDENT_LIST } from '../urls'
import StudentForm from './StudentForm'


export default function StudentCreate({ onCancel, reload, group }) {
    const student = usePostRequest({ url: STUDENT_LIST })


    async function onSubmit(data) {
        const { success } = await student.request({ data: {
            ...data,
        } })
        if (success) {
            reload.request()
            onCancel()
        }
    }

    return (
        <div>
            <h1 className="title has-text-centered"><b>Add Student</b></h1>
            <StudentForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                group={group}
            />
        </div>
    )
}
