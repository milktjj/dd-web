import { GetCourseInfo } from '../api/course';
import { React, useState, useEffect } from 'react';
import { Descriptions } from 'antd';
// import { Descriptions } from 'antd';

const CourseInfo = ({ courseId }) => {
    const [data, setData] = useState(null);
    console.log(courseId)
    const fetchData = () => {
        GetCourseInfo(courseId).then(res => {
            console.log(res)
            setData(res)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <>
        <h1>课程信息</h1>
        <div id="course-info">
            {data && data.map((item, index) => (
                <Descriptions
                    // title="课程信息"
                    bordered
                    size='small'
                    column={{
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 4,
                        xxl: 4,
                    }}
                    layout='vertical'
                    items={getCourseInfoItems(item)}
                />
            ))}
        </div>
    </>
}

function getCourseInfoItems(courseInfo) {
    if (courseInfo === null) {
        return {}
    }
    const smallSpan = {
        sm: 1,
        md: 1,
        lg: 1,
        xl: 2,
        xxl: 2,
    }
    const items = [
        {
            label: '课程名称',
            children: courseInfo?.course_name,
            span: smallSpan,
        },
        {
            label: '学期',
            children: '第' + courseInfo?.course_term + '学期',
            span: smallSpan,
        },
        {
            label: '学年',
            children: courseInfo?.course_schoolyear,
            span: smallSpan,
        },
        {
            label: '学分',
            children: courseInfo?.course_credit,
            span: smallSpan,
        },
        // {
        //     label: '学分',
        //     children: '$80.00',
        //     span: smallSpan,
        // }，
        {
            label: '总学时',
            span: smallSpan,
            children: courseInfo?.course_hours,
        },
        // {
        //     label: '授课语言',
        //     children: '中文',
        //     span: smallSpan,
        // },
        {
            label: '开课部门',
            span: smallSpan,
            children: courseInfo?.org,
        },
        {
            label: '课程负责人',
            span: smallSpan,
            children: courseInfo?.kcfzr,
        },
        {
            label: '课程教师',
            span: smallSpan,
            children: courseInfo?.teacher,
        },
        // {
        //     label: '开课部门',
        //     span: smallSpan,
        //     children: '$60.00',
        // },

        {
            label: '课程简介(中文)',
            span: {
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
            },
            // children: courseInfo?.chinese,
            children: <div dangerouslySetInnerHTML={{ __html: courseInfo?.chinese }}></div>
        },
        {
            label: '课程简介(英文)',
            span: {
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
            },
            children: <div dangerouslySetInnerHTML={{ __html: courseInfo?.english }}></div>
        },
    ];
    return items
}

export default CourseInfo;
