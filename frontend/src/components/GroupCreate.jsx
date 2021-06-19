import React from 'react'
import { usePostRequest } from '../hooks/request'
import { GROUP_LIST } from '../urls'
import GroupForm from './GroupForm'


export default function GroupCreate({ onCancel, reload, department }) {
    const group = usePostRequest({ url: GROUP_LIST })


    async function onSubmit(data) {
        const { success } = await group.request({ data: {
            ...data,
        } })
        if (success) {
            reload.request()
            onCancel()
        }
    }

    return (
        <div>
            <GroupForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                department={department}
            />
        </div>
    )
}
