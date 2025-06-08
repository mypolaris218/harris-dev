import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { styled } from '@mui/material/styles';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const StyledInput = styled('input')(({ theme: muiTheme }) => ({
        border: `4px solid ${theme.primary80}`,
        backgroundColor: `${theme.secondary}`,
        color: `${theme.tertiary}`,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    }));

    const StyledTextArea = styled('textarea')(({ theme: muiTheme }) => ({
        border: `4px solid ${theme.primary80}`,
        backgroundColor: `${theme.secondary}`,
        color: `${theme.tertiary}`,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    }));

    const StyledLabel = styled('label')(({ theme: muiTheme }) => ({
        backgroundColor: `${theme.secondary}`,
        color: `${theme.primary}`,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 600,
        fontSize: '0.9rem',
        padding: '0 5px',
        transform: 'translate(25px,50%)',
        display: 'inline-flex',
    }));

    const SocialIcon = styled('div')(({ theme: muiTheme }) => ({
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '21px',
        backgroundColor: theme.primary,
        color: theme.secondary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    }));

    const DetailsIcon = styled('div')(({ theme: muiTheme }) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '23px',
        transition: '250ms ease-in-out',
        flexShrink: 0,
        '&:hover': {
            transform: 'scale(1.1)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    }));

    const SubmitButton = styled('button')(({ theme: muiTheme }) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.08)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    }));

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <StyledLabel htmlFor='Name'>
                                    Name
                                </StyledLabel>
                                <StyledInput
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                    className='form-input'
                                />
                            </div>
                            <div className='input-container'>
                                <StyledLabel htmlFor='Email'>
                                    Email
                                </StyledLabel>
                                <StyledInput
                                    placeholder='John@doe.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className='form-input'
                                />
                            </div>
                            <div className='input-container'>
                                <StyledLabel htmlFor='Message'>
                                    Message
                                </StyledLabel>
                                <StyledTextArea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type='text'
                                    name='Message'
                                    className='form-message'
                                />
                            </div>

                            <div className='submit-btn'>
                                <SubmitButton
                                    type='submit'
                                    className='submit-btn button'
                                >
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </SubmitButton>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <Alert
                                severity={success ? 'success' : 'error'}
                                onClose={handleClose}
                                sx={{ width: '100%' }}
                            >
                                {errMsg}
                            </Alert>
                        </Snackbar>
                    </div>

                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className={DetailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <div className={DetailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className={DetailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a
                                    href={socialsData.blogger}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaBloggerB aria-label='Blogger' />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaYoutube aria-label='YouTube' />
                                </a>
                            )}
                            {socialsData.reddit && (
                                <a
                                    href={socialsData.reddit}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaRedditAlien aria-label='Reddit' />
                                </a>
                            )}
                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.codepen && (
                                <a
                                    href={socialsData.codepen}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaCodepen aria-label='CodePen' />
                                </a>
                            )}
                            {socialsData.gitlab && (
                                <a
                                    href={socialsData.gitlab}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={SocialIcon}
                                >
                                    <FaGitlab aria-label='GitLab' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
