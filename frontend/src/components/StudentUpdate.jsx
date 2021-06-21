import React, { useState } from 'react'
import { usePutRequest } from '../hooks/request'
import { STUDENT_DETAIL } from '../urls'
import StudentForm from './StudentForm'

export default function StudentUpdate({ hideModal, item, reload, group }) {
    const studentUpdate = usePutRequest({ url: STUDENT_DETAIL.replace('{id}', item.id) })
    const [showUpdate] = useState(true)

    async function onSubmit(data) {
        const { success } = await studentUpdate.request({ data: { ...data, group: data.group.id } })

        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <StudentForm
            onCancel={hideModal}
            initialValues={{ ...item, group: item.group.id }}
            group={group}
            onSubmit={onSubmit}
            showUpdate={showUpdate}
        />
    )
}
