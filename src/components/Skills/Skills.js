import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { Box, Typography, Card, CardContent, Chip, Avatar, Grid } from '@mui/material';

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillCategories } from '../../data/skillsData'
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
                <Marquee 
                    gradient={false} 
                    speed={80} 
                    pauseOnHover={true}
                    pauseOnClick={true} 
                    delay={0}
                    play={true} 
                    direction="left"
                >
                    <Grid container spacing={2} wrap="nowrap" alignItems="stretch" sx={{ py: 2, px: 1 }}>
                        {skillCategories.map(category => (
                            <Grid item key={category.title}>
                                <Card sx={{ ...skillBoxStyle, width: 300, height: '100%' }} elevation={0}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <Typography variant='h5' component='div' className="skill-card-title" sx={{ color: theme.tertiary }}>
                                            {category.title}
                                        </Typography>
                                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                            <Grid container spacing={1} sx={{ p: 1 }}>
                                                {category.data.map(skill => (
                                                    <Grid item size={6} xs={6} key={skill} sx={{ justifyContent: "center", alignItems: "center"}}>
                                                        <Chip 
                                                            label={skill} 
                                                            avatar={<Avatar src={skillsImage(skill)} alt={skill} />}
                                                            sx={{ width: '80%', justifyContent: 'flex-start' }}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Marquee>
            </Box>
        </Box>
    )
}

export default Skills
