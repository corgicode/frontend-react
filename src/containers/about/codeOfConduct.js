import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeOfConductMD from '../../../CODE_OF_CONDUCT.md';

class codeOfConduct extends Component {
    render() {
        return(
            <div>
                <ReactMarkdown source={ CodeOfConductMD } />
            </div>
        );
    }
}

export default codeOfConduct;
