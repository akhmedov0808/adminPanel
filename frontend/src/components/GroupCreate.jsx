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
            <h1 className="title has-text-centered"><b>Add Group</b></h1>
            <GroupForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                department={department}
            />
        </div>
    )
}
