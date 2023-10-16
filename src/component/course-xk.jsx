import React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: '课次',
        dataIndex: 'kc',
        key: 'kc',
        // render: ,
    },
    {
        title: '上课时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '周次',
        dataIndex: 'zc',
        key: 'zc',
    },
    {
        title: '星期',
        key: 'week',
        dataIndex: 'week',
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    },
    {
        title: '上课备注',
        key: 'note',
        dataIndex: 'note',
        // render: (_, record) => (
        //     <Space size="middle">
        //         <a>Invite {record.name}</a>
        //         <a>Delete</a>
        //     </Space>
        // ),
    },
    {
        title: '任课教师',
        key: 'teacher',
        dataIndex: 'teacher',
    },
    {
        title: '场地',
        key: 'place',
        dataIndex: 'place',
    },
];
const data = [
    {
        kc: 1,
        time: "2023-10-10",
        zc: 5,
        week: '二',
        jc: '11-13',
        note: '',
        teacher: '唐嘉靖',
        place: '东中院2-507'
    },
    {
        kc: 2,
        time: "2023-10-17",
        zc: 6,
        week: '二',
        jc: '11-13',
        note: '',
        teacher: '唐嘉靖',
        place: '东中院2-507'
    },
    {
        kc: 3,
        time: "2023-10-24",
        zc: 7,
        week: '二',
        jc: '11-13',
        note: '',
        teacher: '唐嘉靖',
        place: '东中院2-507'
    },
    {
        kc: 4,
        time: "2023-10-31",
        zc: 8,
        week: '二',
        jc: '11-13',
        note: '',
        teacher: '唐嘉靖',
        place: '东中院2-507'
    },
    {
        kc: 5,
        time: "2023-11-07",
        zc: 9,
        week: '二',
        jc: '11-13',
        note: '',
        teacher: '唐嘉靖',
        place: '东中院2-507'
    },
    {
        kc: 6,
        time: "2023-11-14",
        zc: 10,
        week: '二',
        jc: '11-13',
        note: '实验于生物药学楼3-406进行',
        teacher: '唐嘉靖',
        place: '东中院2-507'
    },
];
const XKXX = () => {
    return <>
        <Table columns={columns} dataSource={data} />
    </>
}
export default XKXX;
