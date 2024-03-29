import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_CONTACTS } from '../../queries/contact';
import Contact from './Contact';
import withAuth from '../Session/withAuth';

const ContactsList = () => (
    <div className="contact-list">
        <Query query={GET_USER_CONTACTS}>
            {({ data, loading }) => {
                if (loading) { 
                    return <div>Loading...</div>;
                }
                console.log(data);
                if (data && data.userContacts.length) {
                    return (
                        <ul>
                            {data.userContacts.map((contact, i) => (
                                <Contact key={i} { ...contact }/>
                            ))}
                        </ul>
                    );
                } else {
                    return <div>No Contacts Found</div>;
                }
            }}
        </Query>
    </div>
);

export default withAuth(session => session && session.currentUser)(ContactsList);
