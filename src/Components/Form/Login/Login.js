import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const {user,signInWithGoogle} = useFirebase();
    return (
        <div>
            <div className="container">
                <div style={{height:"100vh"}} className="row py-5 mt-5">
                    <div className="col">
                        <div className="card w-50 text-center mx-auto p-5"> 
                           <div className="row">
                               <div className="col-12">
                               <button onClick={signInWithGoogle} className="btn btn-warning">Google sign in</button>
                               </div>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;