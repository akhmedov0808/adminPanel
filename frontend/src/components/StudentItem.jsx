import React from 'react'
import Button from './common/Button'
import { useModal } from '../hooks/modal'
import { useDeleteRequest } from '../hooks/request'
import { STUDENT_DETAIL } from '../urls'
import StudentUpdate from './StudentUpdate'
import StundentModal from './StudentModal'

export default function StudentItem({ item, reload, group }) {
    const remove = useDeleteRequest({ url: STUDENT_DETAIL.replace('{id}', item.id) })
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
        <StundentModal
            item={item}
        />,
    )

    return (
        <tr>
            <td onClick={showStudentModal} key={item.id} className="is-size-5">
                {item.name}
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
