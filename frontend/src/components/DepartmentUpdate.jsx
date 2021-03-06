import React from 'react'
import {useLoad, usePutRequest} from '../hooks/request'
import {DEPARTMENT_DETAIL, FACULTY_LIST} from '../urls'
import DepartmentForm from './DepartmentForm'

export default function DepartmentUpdate({hideModal, item, reload}) {
    const departmentUpdate = usePutRequest({url: DEPARTMENT_DETAIL.replace('{id}', item.id)})
    const facultyList = useLoad({url: FACULTY_LIST})


    async function onSubmit(data) {
        const {success} = await departmentUpdate.request({data: {...data, faculty: data.faculty.id}})
        if (success) {
            reload.request()
            hideModal()
        }
    }


    return (
        <div>
            <h1 className="title has-text-centered"><b>Edit Department</b></h1>
            <DepartmentForm
                onCancel={hideModal}
                initialValues={{...item, faculty: item.faculty.id}}
                faculty={facultyList.response}
                onSubmit={onSubmit}
            />
        </div>
    )
}
