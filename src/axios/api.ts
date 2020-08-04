import { get, post } from './index'
/**
 * api接口统一管理
 */
export const login = (p: object) => post('/?Action=token', p)
export const tutorList = (p: object) => get('?Action=tutorList', p)
export const tutorType = (p: object) => get('?Action=tutorType', p)
export const studentList = (p: object) => get('?Action=studentList', p)
export const lessonSearch = (p: object) => get('?Action=lessonSearch', p)
export const coursewareList = (p: object) => get('?Action=coursewareList', p)
export const lessonType = (p: object) => get('?Action=lessonType', p)
export const liveState = (p: object) => get('?Action=liveState', p)
export const registeEnterprise = (p: object) =>
  post('/?Action=registeEnterprise', p)
export const forgetPassword = (p: object) => post('/?Action=forgetPassword', p)
export const addStudent = (p: object) => post('/?Action=addStudent', p)
export const addTutor = (p: object) => post('/?Action=addTutor', p)
export const campusList = (p: object) => get('/?Action=campusList', p)
export const lessonTutorList = (p: object) => get('/?Action=lessonTutorList', p)
export const tutorNearData = (p: object) => get('/?Action=tutorNearData', p)
export const lessonCoursewareList = (p: object) =>
  get('/?Action=lessonCoursewareList', p)
export const addLesson = (p: object) => post('/?Action=addLesson', p)
export const coursewareCoverList = (p: object) =>
  get('/?Action=coursewareCoverList', p)
export const completeLessonList = (p: object) =>
  get('/?Action=completeLessonList', p)
export const lessonStudentsList = (p: object) =>
  get('/?Action=lessonStudentsList', p)
export const lessonLinkSts = (p: object) => post('/?Action=lessonLinkSts', p)
