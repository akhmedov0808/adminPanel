import React from 'react'
import Button from './common/Button'
import {useModal} from '../hooks/modal'
import {useDeleteRequest} from '../hooks/request'
import {TEACHER_DETAIL} from '../urls'
import TeacherUpdate from './TeacherUpdate'
import TeacherModal from './TeacherModal'

export default function TeacherItem({item, reload, group, setId, id}) {
    const remove = useDeleteRequest({url: TEACHER_DETAIL.replace('{id}', item.id)})
    const [showUpdateModal, setShowUpdateModal] = useModal(
        <TeacherUpdate
            group={group}
            reload={reload}
            item={item}
            hideModal={() => setShowUpdateModal()}
        />,
    )
    const [showTeacherModal] = useModal(
        <TeacherModal
            item={item}
        />,
    )

    async function onDelete() {
        if (global.confirm('Вы действительно хотите удалить?')) {
            await remove.request()
            reload.request()
        }
    }


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
                <label onClick={() => showTeacherModal()}>{item.name} {item.lastName} ({item.science})</label>&nbsp;&nbsp;
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
