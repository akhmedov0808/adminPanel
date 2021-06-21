import React, { useState } from 'react'
import { usePutRequest } from '../hooks/request'
import { GROUP_DETAIL } from '../urls'
import GroupForm from './GroupForm'

export default function GroupUpdate({ hideModal, item, reload, department }) {
    const groupUpdate = usePutRequest({ url: GROUP_DETAIL.replace('{id}', item.id) })
    const [showUpdate] = useState(true)

    async function onSubmit(data) {
        const { success } = await groupUpdate.request({ data: { ...data, department: data.department.id } })
        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <GroupForm
            onCancel={hideModal}
            initialValues={{ ...item, department: item.department.id }}
            department={department}
            onSubmit={onSubmit}
            showUpdate={showUpdate}
        />
    )
}
