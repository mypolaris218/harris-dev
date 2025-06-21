import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const { theme }  = useContext(ThemeContext)

    return (
        <Box 
            sx={{
                backgroundColor: theme.secondary,
                height: '60px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'var(--primaryFont)',
            }}
        >
            <Typography 
                variant="body1"
                sx={{
                    color: theme.tertiary,
                    fontWeight: 500,
                    fontFamily: 'var(--primaryFont)',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                Copyright © {new Date().getFullYear()} Charalampos S.
            </Typography>
        </Box>
    )
}

export default Footer

