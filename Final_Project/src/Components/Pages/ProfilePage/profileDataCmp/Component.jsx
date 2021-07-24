import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'


const ProfileDataWithRouter = (props) => {

    const [userAvatar, setUserAvatar] = useState('https://i.kym-cdn.com/photos/images/original/000/938/199/ba3.jpg')
    const [name, setName] = useState()
    const [lastname, setLastName] = useState()

    const fetchData = (URI) => {

        return (async () => {
            try {
                const req = await fetch(URI)
                const { data: { avatar } } = await req.json()

                setUserAvatar(avatar)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }

    useEffect(async () => {

        if (!localStorage.getItem('ProfileData')) {
            props.history.push('welcome')
            return
        }
        const { firstname, lastName } = JSON.parse(localStorage.getItem('ProfileData'))
        setName(firstname)
        setLastName(lastName)
        fetchData('https://reqres.in/api/users/2')
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