import React from 'react'
import Button from './common/Button'
import { useModal } from '../hooks/modal'
import { useDeleteRequest } from '../hooks/request'
import { GROUP_DETAIL } from '../urls'
import GroupUpdate from './GroupUpdate'
import GroupModal from './GroupModal'

export default function GroupItem({ item, reload, department }) {
    const remove = useDeleteRequest({ url: GROUP_DETAIL.replace('{id}', item.id) })
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
        />,
    )


    return (
        <tr>
            <td onClick={showGroupModal} key={item.id} className="is-size-5">
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
