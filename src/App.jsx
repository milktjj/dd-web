import { React } from 'react';
import CourseInfo from './component/course-info';
import { DecodeJwt } from './utils/jwt';
import { useSearchParams } from 'react-router-dom';
import XKXX from './component/course-xk';
import { Divider } from 'antd';

const App = () => {
    const [search] = useSearchParams()
    let token = search.get('token')
    let ret = DecodeJwt(token)
    const customFields = ret['https://purl.imsglobal.org/spec/lti/claim/custom']
    const courseId = customFields['course_id']
    return <>
        <CourseInfo courseId={courseId} />
        <Divider />
        <XKXX />
    </>
}

export default App;
