import React from 'react'
import Table from '../components/common/Table'
import { DEPARTMENT_LIST, GROUP_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import Layout from '../components/common/Layout'
import { useModal } from '../hooks/modal'
import Button from '../components/common/Button'
import GroupCreate from '../components/GroupCreate'
import GroupItem from '../components/GroupItem'


export default function Group() {
    const groupList = useLoad({ url: GROUP_LIST })
    const departmentList = useLoad({ url: DEPARTMENT_LIST })

    const [showUpdateModal, setShowUpdateModal] = useModal(
        <GroupCreate
            department={departmentList}
            onCancel={() => setShowUpdateModal()}
            faculty={groupList.response || []}
            reload={groupList}
        />,
    )

    return (
        <Layout>
            <div className="is-flex margin">
                <div><h1 className="is-size-4">Select Group to change</h1></div>
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
                {groupList.response ? (
                    <b className="is-size-5 ml-4">
                        Groups :  {groupList.response.length}
                    </b>
                ) : null}
            </div>
            <Table
                loading={groupList.loading}
                items={groupList.response ? groupList.response : []}
                columns={
                    { name: '', actions: '' }
                }
                renderItem={(item) => (
                    <GroupItem key={item.id}
                        item={item}
                        department={departmentList}
                        reload={groupList} />
                )}
            />

        </Layout>
    )
}
