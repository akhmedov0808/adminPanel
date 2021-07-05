import React from 'react'
import Button from './common/Button'
import {useModal} from '../hooks/modal'
import {useDeleteRequest} from '../hooks/request'
import {STUDENT_DETAIL} from '../urls'
import StudentUpdate from './StudentUpdate'
import StudentModal from './StudentModal'

export default function StudentItem({item, reload, group, setId, id}) {
    const remove = useDeleteRequest({url: STUDENT_DETAIL.replace('{id}', item.id)})
    const [showUpdateModal, setShowUpdateModal] = useModal(
        <StudentUpdate
            group={group}
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

    const [showStudentModal] = useModal(
        <StudentModal
            item={item}
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
                <label onClick={showStudentModal}>{item.name}</label>
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
