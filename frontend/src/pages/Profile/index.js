import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"></img>
                <span>Bem vinda, APAD</span>

                <Link to='/incidents/new' className='button'>Cadastar novo caso</Link>
                <button type='button'>
                    <FiPower size={18} color='#E02041'></FiPower>
                </button>
            </header>
        </div>
    )
}