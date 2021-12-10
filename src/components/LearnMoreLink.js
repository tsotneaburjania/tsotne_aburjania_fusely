import React from 'react'

import '../styles/LearnMoreLink.scss'

function LearnMoreLink() {
    return (
        <div className='learnMoreHolder'>
            <a href='https://google.com' className='learnMoreLink'>Learn More</a>
            <div className='learnMoreOverlay'></div>
        </div>
    )
}

export default LearnMoreLink
