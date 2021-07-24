import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProfileData } from './profileDataCmp';


export function ProfileWithRouter() {


    return (
        <main className='welcome-page container'>
            <section className="profile-pg-section section">
                <div className='profile-page-header-wrapper header-wrapper_h2'>
                    <h2 className='header-s2'>Profile</h2>
                </div>
                <ProfileData />
            </section>
        </main>
    )

}

export const Profile = withRouter(ProfileWithRouter)