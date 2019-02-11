import styled from '@emotion/styled';
// import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(
    {
        '-webkit-transition': 'background 200ms ease-out, font 200ms ease-out, padding 200ms ease-out, margin 200ms ease-out',
        '-moz-transition': 'background 200ms ease-out, font 200ms ease-out, padding 200ms ease-out, margin 200ms ease-out',
        '-o-transition': 'background 200ms ease-out, font 200ms ease-out, padding 200ms ease-out, margin 200ms ease-out',
        'transition': 'background 200ms ease-out, font 200ms ease-out, padding 200ms ease-out, margin 200ms ease-out',
        display: 'inline-block',
        padding: '6px 12px',
        marginBottom: 0,
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        '-ms-touch-action': 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: '4px',
        backgroundColor: '#FA6C65',
        color: '#FFF',
        textTransform: 'uppercase',
        textDecoration: 'none',
        '&:hover, &:active': {
            backgroundColor: '#CF4C45',
            outline: 0,
            color: '#FFF',
            textDecoration: 'none',
        },
    },
    props => ({
        ...props.css,
    }),
);

export default StyledLink;
