import React from 'react'
import { usePostRequest } from '../hooks/request'
import { DEPARTMENT_LIST } from '../urls'
import DepartmentForm from './DepartmentForm'

export default function DepartmentCreate({ onCancel, faculty, reload }) {
    const department = usePostRequest({ url: DEPARTMENT_LIST })

    async function onSubmit(data) {
        const { success } = await department.request({ data: {
            ...data,
        } })
        if (success) {
            reload.request()
            onCancel()
        }
    }

    return (
        <div>
            <DepartmentForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                faculty={faculty}
            />
        </div>
    )
}
