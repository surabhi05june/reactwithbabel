
const { useState, useEffect } = React

const UserDetails = () => {

const [state,setState]=useState({users:[]})

    const fetchUsers=() =>{
        // Where we're fetching data from
        fetch(`https://randomuser.me/api`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            setState(state=>({...state,
              users: data,
              isLoading: false,
            }))
          )
          // Catch any errors we hit and update the app
          .catch(error => setState(state=>({...state, error, isLoading: false })));
      }

      const clearData=()=>{
        setState(state=>({...state,
            users: [],
            isLoading: true,
          }))
      }

    return (
        <div>
            <h1>Random User</h1>
            {/* // Display a message if we encounter an error */}
            {state.error ? <p>{state.error}</p> : null}
            <button onClick={fetchUsers}>Fetch Data</button>
            <button onClick={clearData}>clear Data</button>
            <h1>Data</h1>
            {/* // Here's our data check */}
            {!state.isLoading ? (
                state.users.results && state.users.results.map(user => {
                    const { email,picture } = user;
                    return (
                        <div >
                            <img src={picture.medium}/>
                            <p>Email Address data: {email}</p>
                            <hr />
                        </div>
                    );
                })
                // If there is a delay in data, let's let the user know it's loading
            ) : (
                <h3>Loading...</h3>
            )}
        </div>)
}

ReactDOM.render(<UserDetails />, document.getElementById("AppRoot"))

