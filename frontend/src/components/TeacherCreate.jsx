import React from 'react'
import map from 'lodash/map'
import { usePostRequest } from '../hooks/request'
import { TEACHER_LIST } from '../urls'
import TeacherForm from './TeacherForm'


export default function TeacherCreate({ onCancel, reload, group }) {
    const teacher = usePostRequest({ url: TEACHER_LIST })


    async function onSubmit(data) {
        const { success } = await teacher.request({ data: {
            ...data,
            group: map(data.group, 'value'),
        } })
        if (success) {
            reload.request()
            onCancel()
        }
    }

    return (
        <div>
            <h1 className="title has-text-centered"><b>Add Teacher</b></h1>
            <TeacherForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                group={group}
            />
        </div>
    )
}
