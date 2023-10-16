import { request } from '../utils/request'

export const GetCourseInfo = (courseId: string) => request.get(`/courses/${courseId}/info`, {}, { timeout: 15000 });
