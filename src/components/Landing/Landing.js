import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { styled } from '@mui/material/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
    FaWhatsapp,
    FaPhone
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const ResumeButton = styled(Button)(({ theme: muiTheme }) => ({
        color: theme.primary,
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '150px',
        fontSize: '1rem',
        fontWeight: '500',
        height: '50px',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        '&:hover': {
            backgroundColor: theme.tertiary,
            color: theme.secondary,
            border: `3px solid ${theme.tertiary}`,
        },
        '@media (max-width: 600px)': {
            width: '180px',
        },
    }));

    const ContactButton = styled(Button)(({ theme: muiTheme }) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '150px',
        height: '50px',
        fontSize: '1rem',
        fontWeight: '500',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        '&:hover': {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            border: `3px solid ${theme.tertiary}`,
        },
        '@media (max-width: 600px)': {
            display: 'none',
        },
    }));

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin 
                                    className='landing--social' 
                                    style={{ color: theme.secondary }} 
                                    aria-label='LinkedIn'
                                    size={30}
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <ResumeButton>
                                        Download CV
                                    </ResumeButton>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <ContactButton>
                                    Contact
                                </ContactButton>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
