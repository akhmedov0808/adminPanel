import React from 'react'
import Button from './common/Button'
import {useModal} from '../hooks/modal'
import {useDeleteRequest} from '../hooks/request'
import {FACULTY_DETAIL} from '../urls'
import FacultyUpdate from './FacultyUpdate'
import FacultyModal from './FacultyModal'


export default function FacultyItem({item, reload, setId, id}) {
    const remove = useDeleteRequest({url: FACULTY_DETAIL.replace('{id}', item.id)})
    const [showUpdateModal, setShowUpdateModal] = useModal(
        <FacultyUpdate
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

    const [showFacultyModal] = useModal(
        <FacultyModal
            item={item}/>,
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
                <label onClick={showFacultyModal}>{item.name}</label>
            </td>

            <td className="has-text-right">
                <Button
                    onClick={showUpdateModal}
                    text="Edit"
                    className="is-small is-primary mr-4"
                    icon="create-sharp"/>
                <Button
                    onClick={onDelete}
                    text="Delete"
                    className="is-small is-danger"
                    icon="trash"/>
            </td>
        </tr>

    )
}
