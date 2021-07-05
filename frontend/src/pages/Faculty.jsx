import React, {useState} from 'react'
import Table from '../components/common/Table'
import FacultyItem from '../components/FacultyItem'
import {FACULTY_LIST, FACULTY_UPDATE, STUDENT_LIST} from '../urls'
import {useLoad, usePutRequest} from '../hooks/request'
import Layout from '../components/common/Layout'
import {useModal} from '../hooks/modal'
import Button from '../components/common/Button'
import FacultyCreate from '../components/FacultyCreate'
import FacultyDelete from "../components/FacultyDelete";
import Search from "../components/Search";


export default function Faculty() {
    const [search, setSearch] = useState("")
    const facultyList = useLoad({url: FACULTY_LIST, params: {search}}, [search])
    const studentList = useLoad({url: STUDENT_LIST})
    const [id, setId] = useState([])
    const remove = usePutRequest({url: FACULTY_UPDATE})

    const [showUpdateModal, setShowUpdateModal] = useModal(
        <FacultyCreate
            onCancel={() => setShowUpdateModal()}
            reload={facultyList}/>,
    )

    const [showDeleteModal, setShowDeleteModal] = useModal(
        <FacultyDelete
            studentList={studentList.response || []}
            onCancel={() => setShowDeleteModal()}
            remove={remove}
            reload={facultyList}
            id={id}/>
    )

    return (
        <Layout>
            <div className="is-flex margin">

                <div>
                    <div className="is-size-4"><h1 className="is-size-4">Select Faculty to change</h1></div>

                    <Search setSearch={setSearch} />
                </div>
                <div>
                    <Button
                        onClick={showUpdateModal}
                        className="button is-info"
                        text="Add"
                        icon="add-outline"/>
                </div>

            </div>
            <hr/>

            <div className='is-flex is-justify-content-space-between'>
                {facultyList.response ? (
                    <b className="is-size-5 ml-4">
                        <input type="checkbox" className='mr-3'/>
                        Faculties : {facultyList.response.length}
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
                loading={facultyList.loading}
                items={facultyList.response || []}
                columns={
                    {name: '', actions: ''}
                }

                renderItem={(item) => (<FacultyItem
                    key={item.id}
                    item={item}
                    setId={setId}
                    id={id}
                    reload={facultyList}/>)}/>
        </Layout>
    )
}
