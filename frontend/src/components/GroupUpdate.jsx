import React from 'react'
import { usePutRequest } from '../hooks/request'
import { GROUP_DETAIL } from '../urls'
import GroupForm from './GroupForm'

export default function GroupUpdate({ hideModal, item, reload, department }) {
    const districtUpdate = usePutRequest({ url: GROUP_DETAIL.replace('{id}', item.id) })

    async function onSubmit(data) {
        const { success } = await districtUpdate.request({ data })
        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <GroupForm
            onCancel={hideModal}
            initialValues={item}
            department={department}
            onSubmit={onSubmit} />
    )
}
