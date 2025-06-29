import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { Box, Typography, Grid, styled } from '@mui/material';
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import SingleProject from './SingleProject/SingleProject';
import { usePageTracking } from '../../utils/GATracking';
import './Projects.css'

function Projects() {
    usePageTracking();
    const { theme } = useContext(ThemeContext);

    const ViewAllButton = styled('button')(({ theme: muiTheme }) => ({
        color: theme.secondary70, 
        backgroundColor: theme.primary,
        transition: 'color 0.2s',
        "&:hover": {
            color: theme.secondary, 
            backgroundColor: theme.primary,
        }
    }));

    const ViewArrow = styled(HiArrowRight)(({ theme: muiTheme }) => ({
        color: theme.tertiary, 
        backgroundColor: theme.secondary70,
        width: '40px',
        height: '40px',
        padding: '0.5rem',
        fontSize: '1.05rem',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        "&:hover": {
            color: theme.tertiary, 
            backgroundColor: theme.secondary,
        }
    }));

    const handleVieAllProjectClick = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'button_click',
            button_text: "View All Projects",
            button_location: "Projects Page",
        })
    }

    return (
        <>
            {projectsData.length > 0 && (
                <Box className="projects" id="projects" sx={{ backgroundColor: theme.secondary }}>
                    <Box className="projects--header">
                        <Typography variant="h1" sx={{ color: theme.primary }}>
                            Projects
                        </Typography>
                    </Box>

                    <Grid container spacing={5} className="projects--bodyContainer">
                        {projectsData.slice(0, 4).map(project => (
                            <Grid item xs={12} sm={12} md={6} lg={4} key={project.id}>
                                <SingleProject
                                    theme={theme}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    {projectsData.length > 3 && (
                        <Box className="projects--viewAll">
                            <Link to="/projects">
                                <ViewAllButton onClick={() => handleVieAllProjectClick()}>
                                    View All
                                    <ViewArrow />
                                </ViewAllButton>
                            </Link>
                        </Box>
                    )}
                </Box>
            )}
        </>
    )
}

export default Projects
