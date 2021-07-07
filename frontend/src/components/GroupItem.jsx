import React from 'react'
import Button from './common/Button'
import {useModal} from '../hooks/modal'
import {useDeleteRequest, useLoad} from '../hooks/request'
import {GROUP_DETAIL, STUDENT_LIST, TEACHER_LIST} from '../urls'
import GroupUpdate from './GroupUpdate'
import GroupModal from './GroupModal'

export default function GroupItem({item, reload, department, setId, id}) {
    const remove = useDeleteRequest({url: GROUP_DETAIL.replace('{id}', item.id)})
    const student = useLoad({url: STUDENT_LIST, params: {group: item.id}})
    const teachers = useLoad({url: TEACHER_LIST, params: {group: item.id}})

    const [showUpdateModal, setShowUpdateModal] = useModal(
        <GroupUpdate
            department={department}
            reload={reload}
            item={item}
            hideModal={() => setShowUpdateModal()}
        />,
    )

    async function onDelete() {
        if (global.confirm('Вы действительно хотите удалить?')) {
            await remove.request()
            reload.request()
        }
    }

    const [showGroupModal] = useModal(
        <GroupModal
            item={item}
            student={student}
            teachers={teachers.response || []}
        />,
    )


    return (
        <tr>
            <td key={item.id} className="is-size-5">
                <input onClick={(e) => {
                    if (e.target.checked) {
                        setId([...id, item.id])
                        return
                    }
                    setId(id.filter((i) => item.id !== i))
                }} type="checkbox" id="cbox3" className='mr-3'/>
                <label onClick={showGroupModal}>{item.name}</label>
            </td>

            <td className="has-text-right">
                <Button
                    onClick={showUpdateModal}
                    text="Edit"
                    className="is-small is-primary mr-4"
                    icon="create-sharp"
                />
                <Button
                    onClick={onDelete}
                    text="Delete"
                    className="is-small is-danger"
                    icon="trash"
                />
            </td>

        </tr>

    )
}
