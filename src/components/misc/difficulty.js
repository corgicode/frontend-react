import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DifficultyStars extends Component {
    static propTypes = {
        difficulty: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    }

    render() {
        let { difficulty } = this.props;
        difficulty = Number.parseInt(difficulty, 10);
        if (!difficulty || isNaN(difficulty)) difficulty = 1;
        const arr = [];
        for (let i = 0; i < difficulty; i++) {
            arr.push('');
        }
        return (
            <span>
                {arr.map((d, k) =>
                    <i key={ k } className="icon-attention" />
                )}
            </span>
        );
    }
}

export default DifficultyStars;
