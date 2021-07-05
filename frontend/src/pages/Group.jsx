import React, {useState} from 'react'
import Table from '../components/common/Table'
import {DEPARTMENT_LIST, GROUP_LIST, GROUP_UPDATE, STUDENT_LIST} from '../urls'
import {useLoad, usePutRequest} from '../hooks/request'
import Layout from '../components/common/Layout'
import {useModal} from '../hooks/modal'
import Button from '../components/common/Button'
import GroupCreate from '../components/GroupCreate'
import GroupItem from '../components/GroupItem'
import GroupDelete from "../components/GroupDelete";
import Search from "../components/Search";


export default function Group() {
    const [search, setSearch] = useState("")
    const groupList = useLoad({url: GROUP_LIST, params: {search}}, [search])
    const departmentList = useLoad({url: DEPARTMENT_LIST})
    const [id, setId] = useState([])
    const studentList = useLoad({url: STUDENT_LIST})
    const remove = usePutRequest({url: GROUP_UPDATE})


    const [showUpdateModal, setShowUpdateModal] = useModal(
        <GroupCreate
            department={departmentList}
            onCancel={() => setShowUpdateModal()}
            faculty={groupList.response || []}
            reload={groupList}
        />,
    )

    const [showDeleteModal, setShowDeleteModal] = useModal(
        <GroupDelete
            studentList={studentList.response || []}
            onCancel={() => setShowDeleteModal()}
            remove={remove}
            reload={groupList}
            id={id}
        />
    )

    return (
        <Layout>
            <div className="is-flex margin">
                <div>
                    <h1 className="is-size-4">Select Group to change</h1>
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
                {groupList.response ? (
                    <b className="is-size-5 ml-4">
                        <input type="checkbox" className='mr-3'/>
                        Groups : {groupList.response.length}
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
                loading={groupList.loading}
                items={groupList.response ? groupList.response : []}
                columns={
                    {name: '', actions: ''}
                }
                renderItem={(item) => (<GroupItem
                    key={item.id}
                    item={item}
                    department={departmentList}
                    reload={groupList}
                    setId={setId}
                    id={id}/>)}/>
        </Layout>
    )
}
