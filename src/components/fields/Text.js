import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TextField extends Component {
    static propTypes = {
        label: PropTypes.string,
        meta: PropTypes.object.isRequired,
        input: PropTypes.object.isRequired,
        placeholder: PropTypes.string,
    }

    render() {
        const { label, meta, input, placeholder } = this.props;
        return(
            <div className={ 'form-group ' + (meta.error && meta.touched && 'has-error')}>
                <label htmlFor={ input.name }>
                    <i className={ meta.error ? 'tint-color icon-asterisk' : 'icon-ok green' } />
                    &nbsp;{ label }:
                </label>
                <input type="text"
                    className="form-control"
                    onBlur={ input.onBlur }
                    onChange={ input.onChange }
                    placeholder={ placeholder }
                    value={ input.value }
                />
                {/* <span className="help-block">
                    {meta.error && meta.touched && <span>{meta.error}</span>}&nbsp;
                </span> */}
            </div>
        );
    }
}

export default TextField;
