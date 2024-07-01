import axios from 'axios';

export interface Course {
    id: number;
    title: string;
    lessons: string;
    startDate: string;
    lessonCompleted: string;
    duration: string;
    color:string;
    backgroundColor:string;
}

export const fetchCourses = async (): Promise<Course[]> => {
    const response = await axios.get<Course[]>('http://localhost:3001/courses');
    
    console.log(response.data)
    return response.data;
};
