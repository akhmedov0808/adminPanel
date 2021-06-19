import React from 'react'
import { usePutRequest } from '../hooks/request'
import { STUDENT_DETAIL } from '../urls'
import StudentForm from './StudentForm'

export default function StudentUpdate({ hideModal, item, reload, group }) {
    const studentUpdate = usePutRequest({ url: STUDENT_DETAIL.replace('{id}', item.id) })

    async function onSubmit(data) {
        const { success } = await studentUpdate.request({ data })
        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <StudentForm
            onCancel={hideModal}
            initialValues={item}
            group={group}
            onSubmit={onSubmit} />
    )
}
