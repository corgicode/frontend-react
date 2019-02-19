/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

class TextField extends Component {
    static propTypes = {
        label: PropTypes.string,
        meta: PropTypes.object.isRequired,
        input: PropTypes.object.isRequired,
        placeholder: PropTypes.string,
        type: PropTypes.string,
    }

    static defaultProps = {
        type: 'text',
    }

    render() {
        const { label, meta, input, placeholder } = this.props;

        const inputStyle = {
            display: 'inline-block',
            height: 40,
            padding: '0 10px',
            fontSize: 16,
            lineHeight: 25,
            color: '#73879C',
            resize: 'none',
            verticalAlign: 'middle',
            boxShadow: 'none',
            backgroundColor: '#f5f5f5',
            border: '1px solid #E6E9ED',
            borderRadius: 2,
            transition: 'all 200ms',
            marginBottom: 1,
        };

        return(
            <div css={{ display: 'block', margin: '10px 0' }}>
                {label && <label htmlFor={ input.name }>
                    <i className={ meta.error ? 'tint-color icon-asterisk' : 'icon-ok green' } />
                    &nbsp;{ label }:
                </label>}
                <input type={ this.props.type }
                    css={ inputStyle }
                    onBlur={ input.onBlur }
                    onChange={ input.onChange }
                    placeholder={ placeholder }
                    value={ input.value }
                />
                <p css={{ }}>
                    {meta.error && meta.touched && meta.error}
                </p>
            </div>
        );
    }
}

export default TextField;
