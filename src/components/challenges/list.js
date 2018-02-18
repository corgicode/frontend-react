import React, { Component } from 'react';
import { ChallengesType } from '../../types';
import TintedHeader from '../misc/TintedHeader';
import ChallengeShort from './short.js';

class ChallengesList extends Component {
    static propTypes = {
        challenges: ChallengesType,
    }

    render() {
        const { challenges } = this.props;
        challenges.sort((a, b) => parseInt(a.attributes.number, 10) < parseInt(b.attributes.number, 10));
        return(
            <div>
                <TintedHeader title="Challenges" subtitle="These are all the available challenges" />
                <section className="light-bg">
                    <div className="container challenge-list inner-top-md inner-bottom-sm">
                        {challenges.map((c, key) => <ChallengeShort key={ key } challenge={ c.attributes } /> )}
                    </div>
                </section>
            </div>
        );
    }
}

export default ChallengesList;
