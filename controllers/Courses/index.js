import { create } from './createCourse';
import { getCourseById, getAll } from './getters';
import { rateCourse, updateCourseStatus, updateCourseInfos } from './updaters';
import { deleteCourse } from './deleteCourse';

export default {
    create,
    getCourseById,
    getAll,
    rateCourse,
    updateCourseStatus,
    updateCourseInfos,
    deleteCourse
};