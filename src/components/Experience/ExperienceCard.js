import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {
    const { theme } = useContext(ThemeContext);

    const Card = styled(motion.div)(({ theme: muiTheme }) => ({
        backgroundColor: theme.primary30,
        "&:hover": {
            backgroundColor: theme.primary50,
        },
    }));

    return (
        <Card 
            key={id} 
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
            </div>
            <div className="experience-details">
                <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                <h5 style={{color: theme.tertiary80}}>{company}</h5>
            </div>
        </Card>
    )
}

export default ExperienceCard
