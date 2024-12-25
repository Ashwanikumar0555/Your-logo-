import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState(null); // Initialize with null to handle the initial state

    useEffect(() => {
        fetch('https://api.github.com/users/Ashwanikumar0555') 
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error)); 
    }, []);

    return (
        <div className="text-center text-white m-4 font-semibold bg-blue-200 p-4 text-3xl">
            {/* Conditional rendering to ensure safe access to data properties */}
            {data ? (
                <>
                    <p>Github Followers: {data.followers}</p>
                    <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Github;
