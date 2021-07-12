import React, {useState} from 'react'
import Table from '../components/common/Table'
import DepartmentItem from '../components/DepartmentItem'
import {DEPARTMENT_LIST, DEPARTMENT_UPDATE, FACULTY_LIST, STUDENT_LIST} from '../urls'
import Layout from '../components/common/Layout'
import {useModal} from '../hooks/modal'
import DepartmentCreate from '../components/DepartmentCreate'
import Button from '../components/common/Button'
import {useLoad, usePutRequest} from '../hooks/request'
import DepartmentDelete from "../components/DepartmentDelete";
import Search from "../components/Search";


export default function Department() {
    const [search, setSearch] = useState("")
    const departmentList = useLoad({url: DEPARTMENT_LIST, params: {search}}, [search])
    const facultyList = useLoad({url: FACULTY_LIST})
    const studentList = useLoad({url: STUDENT_LIST})
    const remove = usePutRequest({url: DEPARTMENT_UPDATE})
    const [id, setId] = useState([])


    const [showUpdateModal, hideUpdateModal] = useModal(
        <DepartmentCreate
            onCancel={() => hideUpdateModal()}
            faculty={facultyList.response || []}
            reload={departmentList}/>,
    )

    const [showDeleteModal, setShowDeleteModal] = useModal(
        <DepartmentDelete
            studentList={studentList.response || []}
            onCancel={() => setShowDeleteModal()}
            remove={remove}
            reload={departmentList}
            id={id}
        />
    )

    return (
        <Layout>
            <div className="is-flex margin">
                <div>
                    <h1 className="is-size-4">Select Department to change</h1>
                    <Search setSearch={setSearch}/>
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
                {departmentList.response && (departmentList.response.length > 0) ? (
                    <b className="is-size-5 ml-4">
                        <input type="checkbox" className='mr-3'/>
                        Departments : {departmentList.response.length}
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
                loading={departmentList.loading}
                items={departmentList.response ? departmentList.response : []}
                columns={{name: '', actions: ''}}
                renderItem={(item) => (<DepartmentItem
                    key={item.id}
                    item={item}
                    reload={departmentList}
                    setId={setId}
                    id={id}/>)}/>

        </Layout>
    )
}
