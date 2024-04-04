import React from 'react';

const Results = ({ isSuccess }) => {
    return (
        <div>
            <h2>Campaign Results</h2>
            <p>{isSuccess ? 'Success!' : 'Failure!'}</p>
        </div>
    );
};

export default Results;
