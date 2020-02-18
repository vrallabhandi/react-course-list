
export const getCourses = () => ({
    type: 'GET_COURSES'
});

export const addCourse = (course) => {
    console.log(course)
    return ({
        type: 'ADD_COURSE',
        course
    })
}