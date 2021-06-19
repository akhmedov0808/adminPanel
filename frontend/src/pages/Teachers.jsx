import React from 'react'
import Table from '../components/common/Table'
import { GROUP_LIST, TEACHER_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import Layout from '../components/common/Layout'
import { useModal } from '../hooks/modal'
import Button from '../components/common/Button'
import TeacherCreate from '../components/TeacherCreate'
import TeacherItem from '../components/TeacherItem'


export default function Student() {
    const teacherList = useLoad({ url: TEACHER_LIST })
    const groupList = useLoad({ url: GROUP_LIST })
    const [showUpdateModal, setShowUpdateModal] = useModal(
        <TeacherCreate
            group={groupList}
            onCancel={() => setShowUpdateModal()}
            faculty={teacherList.response ? teacherList.response : []}
            reload={teacherList}
        />,
    )
    return (
        <Layout>
            <div className="is-flex margin">
                <div><h1 className="is-size-4">Select Teacher to change</h1></div>
                <div>
                    <Button
                        onClick={showUpdateModal}
                        className="button is-info"
                        text="Add"
                        icon="add-outline"
                    />
                </div>
            </div>
            <hr />
            <div>
                {teacherList.response && (teacherList.response.length > 0) ? (
                    <b className="is-size-5 ml-4">
                        Teachers :  {teacherList.response.length}
                    </b>
                ) : null}
            </div>
            <Table
                loading={teacherList.loading}
                items={teacherList.response ? teacherList.response : []}
                columns={
                    { name: '', actions: '' }
                }
                renderItem={(item) => (
                    <TeacherItem key={item.id}
                        item={item}
                        group={groupList}
                        reload={teacherList}
                    />
                )}
            />

        </Layout>
    )
}
