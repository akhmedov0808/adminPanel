import React, {useState} from 'react'
import Table from '../components/common/Table'
import {GROUP_LIST, TEACHER_LIST, TEACHER_UPDATE} from '../urls'
import {useLoad, usePutRequest} from '../hooks/request'
import Layout from '../components/common/Layout'
import {useModal} from '../hooks/modal'
import Button from '../components/common/Button'
import TeacherCreate from '../components/TeacherCreate'
import TeacherItem from '../components/TeacherItem'
import Search from "../components/Search";
import TeacherDelete from "../components/TeacherDelete";


export default function Teacher() {
    const [search, setSearch] = useState("")
    const teacherList = useLoad({url: TEACHER_LIST, params: {search}}, [search])
    const groupList = useLoad({url: GROUP_LIST})
    const [id, setId] = useState([])
    const remove = usePutRequest({url: TEACHER_UPDATE})

    const [showUpdateModal, setShowUpdateModal] = useModal(
        <TeacherCreate
            group={groupList}
            onCancel={() => setShowUpdateModal()}
            faculty={teacherList.response || []}
            reload={teacherList}
        />,
    )

    const [showDeleteModal, setShowDeleteModal] = useModal(
        <TeacherDelete
            teacherList={teacherList.response || []}
            onCancel={() => setShowDeleteModal()}
            remove={remove}
            reload={teacherList}
            id={id}
        />
    )

    return (
        <Layout>
            <div className="is-flex margin">
                <div>
                    <h1 className="is-size-4">Select Teacher to change</h1>
                    <Search setSearch={setSearch}/>
                </div>
                <div>
                    <Button
                        onClick={showUpdateModal}
                        className="button is-info"
                        text="Add"
                        icon="add-outline"
                    />
                </div>
            </div>
            <hr/>
            <div className='is-flex is-justify-content-space-between'>
                {teacherList.response && (teacherList.response.length > 0) ? (
                    <b className="is-size-5 ml-4">
                        <input type="checkbox" className='mr-3'/>
                        Teachers : {teacherList.response.length}
                    </b>
                ) : null}
                {id.length > 0 ? (
                    <div>
                        <Button
                            onClick={showDeleteModal}
                            className="button is-danger"
                            text="Delete selected Faculties"
                            icon="trash"/>
                    </div>
                ) : null}
            </div>
            <Table
                loading={teacherList.loading}
                items={teacherList.response ? teacherList.response : []}
                columns={
                    {name: '', actions: ''}
                }
                renderItem={(item) => (<TeacherItem
                    key={item.id}
                    item={item}
                    group={groupList}
                    reload={teacherList}
                    setId={setId}
                    id={id}/>)}/>
        </Layout>
    )
}
