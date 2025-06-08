import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {
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
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="achievecard-content">
                <div className="achievecard-details1">
                    <h2 style={{color: theme.tertiary}}>{title}</h2>
                    <p style={{color: theme.tertiary80}}>{details}</p>
                </div>
                <div className="achievecard-details2" style={{color: theme.primary}}>
                    <h5>{date}</h5>
                    <div className="achievecard-field">
                        <AiOutlineFolder />
                        <h5>{field}</h5>
                    </div>   
                </div>
            </div> 
            <div className="achievecard-imgcontainer">
                <img src={image} alt="" />
            </div>
        </Card>
    )
}

export default AchievementCard
