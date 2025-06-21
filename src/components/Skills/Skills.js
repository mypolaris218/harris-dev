import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { Box, Typography, Card, CardContent } from '@mui/material';

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <Box className="skills" sx={{ backgroundColor: theme.secondary }}>
            <Box className="skillsHeader">
                <Typography variant="h2" sx={{ 
                    color: theme.primary,
                    fontFamily: 'var(--primaryFont)',
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    textAlign: 'center'
                }}>
                    Skills
                </Typography>
            </Box>
            <Box className="skillsContainer">
                <Box className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <Card className="skill--box" key={id} sx={skillBoxStyle} elevation={0}>
                                <CardContent className="skill-card-content">
                                    <img src={skillsImage(skill)} alt={skill} />
                                    <h3 style={{ color: theme.tertiary }}>
                                        {skill}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </Marquee>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills
