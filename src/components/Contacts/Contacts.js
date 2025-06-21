import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, Alert, Box, Typography, Grid, TextField, Button, Link, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
    FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaBloggerB, FaRedditAlien, FaStackOverflow, FaCodepen, FaInstagram, FaGitlab, FaMediumM, FaWhatsapp, FaTelegramPlane,
} from 'react-icons/fa';
import { SiMicrosoftteams } from 'react-icons/si';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { styled } from '@mui/material/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const contactDetails = [
        { key: 'email', Icon: FiAtSign, prefix: 'mailto:', text: contactsData.email },
        { key: 'phone', Icon: FiPhone, prefix: 'tel:', text: contactsData.phone },
        { key: 'whatsapp', Icon: FaWhatsapp, prefix: '', text: contactsData.whatsapp ? contactsData.whatsapp.split('/').pop() : '' },
        { key: 'telegram', Icon: FaTelegramPlane, prefix: '', text: contactsData.telegram ? `@${contactsData.telegram.split('/').pop()}`: '' },
        { key: 'teams', Icon: SiMicrosoftteams, prefix: '', text: 'Microsoft Teams' },
    ];

    const socialIcons = {
        github: <FaGithub aria-label='GitHub' />,
        linkedIn: <FaLinkedinIn aria-label='LinkedIn' />,
        twitter: <FaTwitter aria-label='Twitter' />,
        instagram: <FaInstagram aria-label='Instagram' />,
        blogger: <FaBloggerB aria-label='Blogger' />,
        medium: <FaMediumM aria-label='Medium' />,
        youtube: <FaYoutube aria-label='YouTube' />,
        reddit: <FaRedditAlien aria-label='Reddit' />,
        stackoverflow: <FaStackOverflow aria-label='Stack Overflow' />,
        codepen: <FaCodepen aria-label='CodePen' />,
        gitlab: <FaGitlab aria-label='GitLab' />,
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                // axios.post(contactsData.sheetAPI, responseData).then((res) => {
                //     setSuccess(true);
                //     setErrMsg('');
                //     setName('');
                //     setEmail('');
                //     setMessage('');
                //     setOpen(false);
                // });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };
    
    const textFieldStyles = {
        '& label.Mui-focused': {
            color: theme.secondary,
        },
        '& label': {
            fontFamily: 'var(--primaryFont)',
            color: theme.secondary,
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'gray'
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white', // focused color
        },
        '& .MuiInputLabel-root': {
            color: 'gray'
        },
        '& .MuiInputBase-input': {
            color: theme.secondary,
            fontFamily: 'var(--primaryFont)'
        }
    };

    const formFields = [
        {
            key: 'name',
            label: 'Name',
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: 'John Doe',
            type: 'text',
            multiline: false,
            rows: undefined
        },
        {
            key: 'email',
            label: 'Email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'John@doe.com',
            type: 'email',
            multiline: false,
            rows: undefined
        },
        {
            key: 'message',
            label: 'Message',
            value: message,
            onChange: (e) => setMessage(e.target.value),
            placeholder: 'Type your message....',
            type: 'text',
            multiline: true,
            rows: 4
        }
    ];

    const SocialIcon = styled('div')(({ theme: muiTheme }) => ({
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '21px',
        backgroundColor: theme.secondary,
        color: theme.primary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    }));

    const DetailsIcon = styled('div')(({ theme: muiTheme }) => ({
        backgroundColor: theme.secondary,
        color: theme.primary,
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '23px',
        transition: 'all 0.3s ease-in-out',
        flexShrink: 0,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        '&:hover': {
            transform: 'translateY(-5px) scale(1.1)',
            boxShadow: '0px 7px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor: theme.tertiary,
            color: theme.secondary,
        },
    }));

    return (
        <Box
            className='contacts'
            id='contacts'
            sx={{ backgroundColor: theme.primary, p: 3 }}
        >
            <Box className='contacts--container'>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        color: theme.secondary,
                        fontFamily: 'var(--primaryFont)',
                        fontWeight: 'bold',
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                        textAlign: 'left',
                        mb: 5
                    }}
                >
                    Contacts
                </Typography>
                <Grid container spacing={5} justifyContent="center" alignItems="flex-start">
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleContactForm} className='contacts-form'>
                            {formFields.map(field => (
                                <TextField
                                    key={field.key}
                                    fullWidth
                                    label={field.label}
                                    value={field.value}
                                    onChange={field.onChange}
                                    multiline={field.multiline}
                                    rows={field.rows}
                                    variant="standard"
                                    margin="dense"
                                    sx={{
                                        ...textFieldStyles,
                                        mb: 3
                                    }}
                                />
                            ))}

                            <Box className='submit-btn' sx={{ mt: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="send-btn"
                                    endIcon={
                                        success ? <AiOutlineCheckCircle /> : <AiOutlineSend />
                                    }
                                    sx={{
                                        backgroundColor: theme.secondary,
                                        color: theme.primary,
                                        fontFamily: 'var(--primaryFont)',
                                        '&:hover': {
                                            backgroundColor: theme.tertiary,
                                            color: theme.secondary,
                                        },
                                        padding: '0.7rem 1.8rem'
                                    }}
                                >
                                    {success ? 'Sent' : 'Send'}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                         <Box className='contacts-details'>
                            {contactDetails.map(detail => (
                                contactsData[detail.key] && (
                                    <Link
                                        key={detail.key}
                                        href={detail.prefix ? `${detail.prefix}${contactsData[detail.key]}` : contactsData[detail.key]}
                                        className='personal-details'
                                        target={!detail.prefix ? '_blank' : '_self'}
                                        rel={!detail.prefix ? 'noreferrer' : ''}
                                        underline='none'
                                    >
                                        <DetailsIcon>
                                            <detail.Icon />
                                        </DetailsIcon>
                                        <p style={{ color: theme.secondary }}>
                                            {detail.text}
                                        </p>
                                    </Link>
                                )
                            ))}
                             <div className='personal-details'>
                                 <DetailsIcon>
                                     <HiOutlineLocationMarker />
                                 </DetailsIcon>
                                 <p style={{ color: theme.secondary }}>
                                     {contactsData.address}
                                 </p>
                             </div>
                             <Box className='socialmedia-icons' sx={{ mt: 4 }}>
                                 {Object.entries(socialsData).map(([key, value]) => (
                                     socialIcons[key] && (
                                         <Link
                                             key={value}
                                             href={value}
                                             target='_blank'
                                             rel='noreferrer'
                                         >
                                            <SocialIcon>
                                                {socialIcons[key]}
                                            </SocialIcon>
                                         </Link>
                                     )
                                 ))}
                             </Box>
                         </Box>
                    </Grid>
                </Grid>
                <Box
                    component="img"
                    src={theme.contactsimg}
                    alt="contact"
                    className="contacts--img"
                    sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: { xs: 0, md: '280px' },
                        pointerEvents: 'none',
                        '@media (min-width: 992px) and (max-width: 1380px)': {
                            width: '240px'
                        }
                    }}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    TransitionProps={{
                        onExit: () => {
                            setSuccess(false);
                        }
                    }}
                >
                    <Alert
                        onClose={handleClose}
                        severity={!success ? 'error' : 'success'}
                        sx={{ width: '100%' }}
                    >
                        {errMsg || 'Message sent successfully!'}
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
}

export default Contacts;
