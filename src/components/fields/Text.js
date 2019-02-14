import React, { Component } from 'react';
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
        return(
            <div className={ 'form-group ' + (meta.error && meta.touched && 'has-error')}>
                {label && <label htmlFor={ input.name }>
                    <i className={ meta.error ? 'tint-color icon-asterisk' : 'icon-ok green' } />
                    &nbsp;{ label }:
                </label>}
                <input type={ this.props.type }
                    className="form-control"
                    onBlur={ input.onBlur }
                    onChange={ input.onChange }
                    placeholder={ placeholder }
                    value={ input.value }
                />
                <p className="help-block">
                    {meta.error && meta.touched && meta.error}
                </p>
            </div>
        );
    }
}

export default TextField;
