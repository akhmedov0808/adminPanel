import React from 'react'
import map from 'lodash/map'
import {usePutRequest} from '../hooks/request'
import {TEACHER_DETAIL} from '../urls'
import TeacherForm from './TeacherForm'

export default function TeacherUpdate({hideModal, item, reload, group}) {
    const teacherUpdate = usePutRequest({url: TEACHER_DETAIL.replace('{id}', item.id)})

    async function onSubmit(data) {
        const {success} = await teacherUpdate.request({
            data: {
                ...data,
                group: map(data.group, 'value'),
            }
        })
        if (success) {
            reload.request()
            hideModal()
        }
    }

    return (
        <div>
            <h1 className="title has-text-centered"><b>Edit Teacher</b></h1>
            <TeacherForm
                onCancel={hideModal}
                initialValues={item}
                group={group}
                onSubmit={onSubmit}/>
        </div>
    )
}
