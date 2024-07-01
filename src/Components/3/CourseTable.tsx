import React, { useEffect, useState } from 'react';
import { fetchCourses, Course } from '../../services/api';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Typography, Box
} from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ComputerIcon from '@mui/icons-material/Computer';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

const iconMap: { [key: string]: React.ElementType[] } = {
    'Basic Algorithm': [WidgetsIcon],
    'Web Development': [ComputerIcon],
    'Basic Data Science': [AddToQueueIcon],
    'UI/UX Design': [ComputerIcon],
    'Project Management': [ViewComfyIcon],
};

const CourseTable: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const getCourses = async () => {
            const coursesData = await fetchCourses();
            setCourses(coursesData);
        };
        getCourses();
    }, []);

    return (
        <Box sx={{ width: '1300px', fontFamily: 'Rubik', paddingRight: '100px ', minHeight: "100vh" }}>
            <Typography variant="h4" sx={{ textAlign: 'start', color: '#000000a6', fontWeight: 600 }}>
                My Courses
            </Typography> <Typography sx={{ textAlign: 'start', color: 'blue', fontWeight: 600, display: 'inline', position: "relative", bottom: "30px", left: '500px', cursor: 'pointer' }}>
                View All
            </Typography>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: '1.4rem', fontWeight: 600, color: '#00000054' }}>Course Name</TableCell>
                            <TableCell sx={{ fontSize: '1.4rem', fontWeight: 600, color: '#00000054' }}>Start Date</TableCell>
                            <TableCell sx={{ fontSize: '1.4rem', fontWeight: 600, color: '#00000054' }}>Lesson Completed</TableCell>
                            <TableCell sx={{ fontSize: '1.4rem', fontWeight: 600, color: '#00000054' }}>Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.map((course) => {
                            const icons = iconMap[course.title] || [WidgetsIcon];
                            return (
                                <TableRow key={course.id} sx={{ height: "100px" }}>
                                    <TableCell >
                                        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "1.4rem" }}>
                                            <Box sx={{}}>   {icons.map((Icon, index) => (
                                                <Icon key={index} sx={{
                                                    marginRight: '25px',
                                                    borderRadius: '30%',
                                                    height: '70px',
                                                    width: '80px',
                                                    color: course.color,
                                                    backgroundColor: course.backgroundColor,
                                                    opacity: 0.9
                                                }} />
                                            ))} </Box>
                                            {course.title}

                                            <Box sx={{ fontSize: "1rem", color: "#00000069" }}>
                                                &nbsp;&nbsp;&nbsp;-  {course.lessons}</Box>
                                        </Box>

                                    </TableCell>
                                    <TableCell>{course.startDate}</TableCell>
                                    <TableCell>{course.lessonCompleted}</TableCell>
                                    <TableCell>{course.duration}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CourseTable;
