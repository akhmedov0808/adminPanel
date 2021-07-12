import React, {useState} from 'react'
import Table from '../components/common/Table'
import {GROUP_LIST, STUDENT_LIST, STUDENT_UPDATE} from '../urls'
import {useLoad, usePutRequest} from '../hooks/request'
import Layout from '../components/common/Layout'
import {useModal} from '../hooks/modal'
import Button from '../components/common/Button'
import StudentCreate from '../components/StudentCreate'
import StudentItem from '../components/StudentItem'
import StudentDelete from "../components/StudentDelete";
import Search from "../components/Search";


export default function Student() {
    const [search, setSearch] = useState("")
    const studentList = useLoad({url: STUDENT_LIST, params: {search}}, [search])
    const groupList = useLoad({url: GROUP_LIST})
    const [id, setId] = useState([])
    const remove = usePutRequest({url: STUDENT_UPDATE})

    const [showUpdateModal, setShowUpdateModal] = useModal(
        <StudentCreate
            group={groupList}
            onCancel={() => setShowUpdateModal()}
            faculty={studentList.response || []}
            reload={studentList}
        />,
    )

    const [showDeleteModal, setShowDeleteModal] = useModal(
        <StudentDelete
            studentList={studentList.response || []}
            onCancel={() => setShowDeleteModal()}
            remove={remove}
            reload={studentList}
            id={id}
        />
    )

    return (
        <Layout>
            <div className="is-flex margin">
                <div>
                    <h1 className="is-size-4">Select Student to change</h1>
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
                {studentList.response && (studentList.response.length > 0) ? (
                    <b className="is-size-5 ml-4">
                        <input type="checkbox" className='mr-3'/>
                        Students : {studentList.response.length}
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
                loading={studentList.loading}
                items={studentList.response || []}
                columns={
                    {name: '', actions: ''}
                }
                renderItem={(item) => (
                    <StudentItem
                        key={item.id}
                        item={item}
                        group={groupList}
                        reload={studentList}
                        setId={setId}
                        id={id}/>)}/>
        </Layout>
    )
}
