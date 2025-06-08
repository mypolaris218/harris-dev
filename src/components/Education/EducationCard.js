import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {
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
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="educard-img" style={{backgroundColor: theme.primary}}>
                <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
            </div>
            <div className="education-details">
                <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                <h4 style={{color: theme.tertiary}}>{course}</h4>
                <h5 style={{color: theme.tertiary80}}>{institution}</h5>
            </div>
        </Card>
    )
}

export default EducationCard
