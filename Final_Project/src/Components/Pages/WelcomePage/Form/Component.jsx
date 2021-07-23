import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { validate } from './plugins/validateEmail'
import { prepareAnimalsCover } from '../../../../Redux/actions/prepareAnimalsCover'
import { connect } from 'react-redux'
import nevskiy from '../../../../Constants/Assets/avatar/nevskiy.jpg'
import { preparePersonsCover } from '../../../../Redux/actions/preparePersonsCover'
import { prepareMarvelCaractersCover } from '../../../../Redux/actions/prepareMarvelCaracters'
import { Rules } from '../rulesCmp'

import './style.scss'

const FormToConnect = (props) => {

    const [alert, setAlert] = useState('email-wrapper')
    const [profileDataFromStorage, setProfileDataFromStorage] = useState(JSON.parse(localStorage.getItem('ProfileData')))


    const firstNameValue = useRef()
    const lastNameValue = useRef()
    const emailValue = useRef()
    const difficultyValue = useRef()



    const onFocus = (e) => {
        setAlert(pre => 'email-wrapper')
    }


    const onClick = (e) => {

        e.preventDefault()


        const { current: { value: difficulty } } = difficultyValue


        if (!emailValue.current && difficulty) {
            if (difficulty === 'nooby') props.prepareAnimalsCover()
            else if (difficulty === 'experienced') props.preparePersonsCover()
            else if (difficulty === 'old') props.prepareMarvelCaractersCover()
            props.history.push('game')
            return

        }

        const { current: { value: firstname } } = firstNameValue
        const { current: { value: lastName } } = lastNameValue
        const { current: { value: email } } = emailValue
        const match = validate(email)

        if (!match) {
            setAlert(pre => 'email-wrapper transition')
            setTimeout(() => {
                setAlert(pre => 'email-wrapper alert-msg ')
            }, 200)
            return
        }
        localStorage.setItem('ProfileData', JSON.stringify({ firstname, lastName, email }))
        setProfileDataFromStorage(pre => ({ ...pre, ...{ firstname, lastName, email } }))
        //закинуть сложность и профиль + добавить плашку с ссылкой на профиль
        setAlert(pre => 'email-wrapper')

        if (difficulty === 'nooby') props.prepareAnimalsCover()
        else if (difficulty === 'experienced') props.preparePersonsCover()
        else if (difficulty === 'old') props.prepareMarvelCaractersCover()
        props.history.push('game')

    }

    return (
        <div className='welcome-page-authentification-form-wrapper'>
            <Rules />
            <form method='GET' className='welcome-page-authentification-form'>
                <fieldset className='fieldset-wrapper'>
                    <legend>settings</legend>
                    {!profileDataFromStorage ? (<>
                        <div className='input-wrapper-container'>
                            <div className='input-wrapper'>
                                <input ref={firstNameValue} type="text" name="name" placeholder="First Name" />
                            </div>
                            <div className='input-wrapper'>
                                <input ref={lastNameValue} type="text" name="lastName" placeholder="Last Name" />
                            </div>
                            <div className={`input-wrapper ${alert}`}>
                                <input onFocus={onFocus} ref={emailValue} type="e-mail" required name="email" placeholder="example@gmail.com" />
                            </div>
                        </div>

                    </>) : <span>Choose difficulty before play</span>
                    }
                    <div className='difficulty-section-container form-container'>
                        <div className='difficulty-section-wrapper form-wrapper'>
                            <div>
                                <span>Difficulty :</span>
                            </div>
                            <div>
                                <select ref={difficultyValue}>
                                    <option value="nooby">Nooby (Easy)</option>
                                    <option value="experienced">Experienced (Medium)</option>
                                    <option value="old">Old (Hard)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="quote-container">
                        <blockquote className='quote-wrapper'>
                            <span>&#8222;
                                You wanna play?!
                                &#8221;
                            </span>
                            <div className='form-personal-data-wrapper'>
                                <div className='user-info-wrapper'>
                                    <div className='avatar-wrapper'>
                                        <img src={nevskiy} className='avatar-item' alt='' />
                                    </div>
                                    <div className='personal-data'>
                                        <span className='personal-data-name'>Aleksandr Nevskiy</span>
                                        <span className='personal-data-description'>Mr. Universe</span>
                                    </div>
                                </div>
                                <button onClick={onClick} type="submit" className="play-btn" >Let's PLAY!</button>
                            </div>
                        </blockquote>
                    </div>
                </fieldset>
            </form>
        </div >
    )
}


const mapDispatchToprops = {
    prepareAnimalsCover,
    preparePersonsCover,
    prepareMarvelCaractersCover,
}


export const Form = withRouter(connect(null, mapDispatchToprops)(FormToConnect))
