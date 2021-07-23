import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'


const ProfileDataWithRouter = (props) => {

    const [userAvatar, setUserAvatar] = useState('https://i.kym-cdn.com/photos/images/original/000/938/199/ba3.jpg')
    const [name, setName] = useState()
    const [lastname, setLastName] = useState()



    useEffect(async () => {

        if (!localStorage.getItem('ProfileData')) {
            props.history.push('welcome')
            return
        }


        const { firstname, lastName } = JSON.parse(localStorage.getItem('ProfileData'))
        setName(pre => firstname)
        setLastName(pre => lastName)

        try {
            const req = await fetch('https://reqres.in/api/users/2')
            const { data: { avatar } } = await req.json()
            setUserAvatar(pre => avatar)

        } catch (error) {
            console.log(error.message)
        }

    }, [])

    return (

        <div className='profile-page-content-wrapper'>
            <div className='personal-data-wrapper'>
                <div className='profile-avatar-wrapper'>
                    <img className='profile-avatar-item' src={userAvatar} alt="avatar" />
                </div>
                <div>
                    <div className='profile-name-wrapper name'>
                        <span>Name: </span>
                        <span>{name}</span>
                    </div>
                    <div className='profile-name-wrapper lastname'>
                        <span>Last name: </span>
                        <span>{lastname}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export const ProfileData = withRouter(ProfileDataWithRouter)