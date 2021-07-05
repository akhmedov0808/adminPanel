import React from 'react'
import { usePostRequest } from '../hooks/request'
import { DEPARTMENT_LIST } from '../urls'
import DepartmentForm from './DepartmentForm'

export default function DepartmentCreate({ onCancel, reload, faculty }) {
    const department = usePostRequest({ url: DEPARTMENT_LIST })

    async function onSubmit(data) {
        const { success } = await department.request({ data })

        if (success) {
            reload.request()
            onCancel()
        }
    }

    return (
        <div>
            <h1 className="title has-text-centered"><b>Add Department</b></h1>
            <DepartmentForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                faculty={faculty} />
        </div>
    )
}
