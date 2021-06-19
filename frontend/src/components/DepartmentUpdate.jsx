import React from 'react'
import { useLoad, usePutRequest } from '../hooks/request'
import { DEPARTMENT_DETAIL, FACULTY_LIST } from '../urls'
import DepartmentForm from './DepartmentForm'

export default function DepartmentUpdate({ hideModal, item, reload }) {
    const districtUpdate = usePutRequest({ url: DEPARTMENT_DETAIL.replace('{id}', item.id) })
    const facultyList = useLoad({ url: FACULTY_LIST })

    async function onSubmit(data) {
        const { success } = await districtUpdate.request({ data: { ...data } })
        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <DepartmentForm
            onCancel={hideModal}
            initialValues={item}
            faculty={facultyList.response}
            onSubmit={onSubmit} />
    )
}
