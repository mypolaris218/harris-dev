import React from 'react';
import { styled } from '@mui/material/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const IconButton = styled('a')(({ theme: muiTheme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        border: `2px solid ${theme.tertiary}`,
        color: theme.tertiary,
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.secondary,
            color: theme.primary,
            transform: 'scale(1.1)',
            border: `2px solid ${theme.secondary}`,
        },
    }));

    const Icon = styled('span')(({ theme: muiTheme }) => ({
        fontSize: '1.1rem',
        transition: 'all 0.2s',
    }));

    return (
        <motion.div
            key={id}
            className='singleProject'
            style={{ backgroundColor: theme.primary400 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className='projectContent'>
                <h2
                    id={name.replace(' ', '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {name}
                </h2>
                <img src={image ? image : placeholder} alt={name} />
                <div className='project--showcaseBtn'>
                    <IconButton
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        aria-labelledby={`${name
                            .replace(' ', '-')
                            .toLowerCase()} ${name
                            .replace(' ', '-')
                            .toLowerCase()}-demo`}
                    >
                        <Icon>
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                aria-label='Demo'
                            />
                        </Icon>
                    </IconButton>
                    <IconButton
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        aria-labelledby={`${name
                            .replace(' ', '-')
                            .toLowerCase()} ${name
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <Icon>
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                aria-label='Code'
                            />
                        </Icon>
                    </IconButton>
                </div>
            </div>
            <p
                className='project--desc'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary,
                }}
            >
                {desc}
            </p>
            <div
                className='project--lang'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary80,
                }}
            >
                {tags.map((tag, id) => (
                    <span key={id}>{tag}</span>
                ))}
            </div>
        </motion.div>
    );
}

export default SingleProject;
