import React, { useState, useEffect } from "react";

function UserDetails() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
console.log("react Runing")
    useEffect(() => {
        init()
        
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    const init=()=>{
        fetch("https://randomuser.me/api")
            .then((response) => {
                if (response.ok) {
                    // return response.json();
                }
                throw response;
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (
        <div>
            <button onClick={init}>Click Me</button>
            {/* <img src={data.results[0].picture.medium} alt="random user" />
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    );
}
export default UserDetails;