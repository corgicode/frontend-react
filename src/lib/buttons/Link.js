import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(
    {
        transition: 'background 200ms ease-out, font 200ms ease-out, padding 200ms ease-out, margin 200ms ease-out',
        display: 'inline-block',
        padding: '6px 12px',
        marginBottom: 0,
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        userSelect: 'none',
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
