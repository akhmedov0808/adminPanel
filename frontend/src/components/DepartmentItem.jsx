import React from 'react'
import Button from './common/Button'
import {useModal} from '../hooks/modal'
import DepartmentUpdate from './DepartmentUpdate'
import {useDeleteRequest} from '../hooks/request'
import {DEPARTMENT_DETAIL} from '../urls'
import DepartmentModal from './DepartmentModal'

export default function DepartmentItem({item, reload, setId, id}) {
    const remove = useDeleteRequest({url: DEPARTMENT_DETAIL.replace('{id}', item.id)})
    const [showUpdateModal, setShowUpdateModal] = useModal(
        <DepartmentUpdate
            reload={reload}
            item={item}
            hideModal={() => setShowUpdateModal()}
        />,
    )

    const [showDepartmentModal] = useModal(
        <DepartmentModal
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
                <label onClick={showDepartmentModal}>{item.name}</label>
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
