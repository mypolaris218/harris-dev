import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const NavMenuIcon = styled(IoMenuSharp)(({ theme: muiTheme }) => ({
        fontSize: '2.5rem',
        color: theme.tertiary,
        cursor: 'pointer',
        transform: 'translateY(-10px)',
        transition: 'color 0.3s',
        '&:hover': {
            color: theme.primary,
        },
        '@media (max-width: 960px)': {
            fontSize: '2.5rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '2rem',
        },
    }));

    const StyledDrawer = styled(Drawer)(({ theme: muiTheme }) => ({
        '& .MuiDrawer-paper': {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: 'var(--primaryFont)',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            '@media (max-width: 960px)': {
                width: '12em',
            },
        },
    }));

    const CloseButton = styled(CloseIcon)(({ theme: muiTheme }) => ({
        fontSize: '2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: theme.primary,
        position: 'absolute',
        right: 40,
        top: 40,
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.tertiary,
        },
        '@media (max-width: 960px)': {
            right: 20,
            top: 20,
        },
    }));

    const DrawerItem = styled('div')(({ theme: muiTheme }) => ({
        margin: '2rem auto',
        borderRadius: '78.8418px',
        background: theme.secondary,
        color: theme.primary,
        width: '85%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '0 30px',
        boxSizing: 'border-box',
        border: '2px solid',
        borderColor: theme.primary,
        transition: 'background-color 0.2s, color 0.2s',
        '&:hover': {
            background: theme.primary,
            color: theme.secondary,
        },
        '@media (max-width: 960px)': {
            width: '100%',
            padding: '0 25px',
            height: '55px',
        },
    }));

    const DrawerLink = styled('span')(({ theme: muiTheme }) => ({
        fontFamily: 'var(--primaryFont)',
        width: '50%',
        fontSize: '1.3rem',
        fontWeight: 600,
        '@media (max-width: 960px)': {
            fontSize: '1.125rem',
        },
    }));

    const DrawerIcon = styled('span')(({ theme: muiTheme }) => ({
        fontSize: '1.6rem',
        '@media (max-width: 960px)': {
            fontSize: '1.385rem',
        },
    }));

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    const MotionNavLink = motion(NavLink);
    const navItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <NavMenuIcon
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <StyledDrawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseButton
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <AnimatePresence>
                            <MotionNavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <DrawerItem>
                                    <DrawerIcon>
                                        <IoHomeSharp />
                                    </DrawerIcon>
                                    <DrawerLink>
                                        Home
                                    </DrawerLink>
                                </DrawerItem>
                            </MotionNavLink>

                            <MotionNavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <DrawerItem>
                                    <DrawerIcon>
                                        <FaUser />
                                    </DrawerIcon>
                                    <DrawerLink>
                                        About
                                    </DrawerLink>
                                </DrawerItem>
                            </MotionNavLink>

                            <MotionNavLink
                                to='/#resume'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                <DrawerItem>
                                    <DrawerIcon>
                                        <HiDocumentText />
                                    </DrawerIcon>
                                    <DrawerLink>
                                        Resume
                                    </DrawerLink>
                                </DrawerItem>
                            </MotionNavLink>

                            <MotionNavLink
                                to='/#services'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                <DrawerItem>
                                    <DrawerIcon>
                                        <BsFillGearFill />
                                    </DrawerIcon>
                                    <DrawerLink>
                                        Services
                                    </DrawerLink>
                                </DrawerItem>
                            </MotionNavLink>

                            <MotionNavLink
                                to='/#projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <DrawerItem>
                                    <DrawerIcon>
                                        <FaFolderOpen />
                                    </DrawerIcon>
                                    <DrawerLink>
                                        Projects
                                    </DrawerLink>
                                </DrawerItem>
                            </MotionNavLink>

                            <MotionNavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: 0.6 }}
                            >
                                <DrawerItem>
                                    <DrawerIcon>
                                        <MdPhone />
                                    </DrawerIcon>
                                    <DrawerLink>
                                        Contact
                                    </DrawerLink>
                                </DrawerItem>
                            </MotionNavLink>
                        </AnimatePresence>
                    </div>
                </div>
            </StyledDrawer>
        </div>
    );
}

export default Navbar;
