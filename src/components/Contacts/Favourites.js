import React from 'react';
import withAuth from "../Session/withAuth";
import Contact from "./Contact";

const Favourites = ({ session }) => {
    console.log(session);
    return (
        <div className="App">
            <h2>Favourites</h2>
            <ul>
                {session && session.currentUser && session.currentUser.favourites.map((contact, i) => (
                    <Contact key={i} { ...contact } />
                ))}
            </ul>
        </div>
    );
};

export default withAuth(session => session && session.currentUser)(Favourites);

