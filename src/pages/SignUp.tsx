import { useContext, useState, ChangeEvent } from 'react'
import { Context } from '../contexts/Contexts'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'


export const SignUp = () => {
    const { state, dispatch } = useContext(Context)
    // const [Registr, setregistration] = useState(state.user.registration)
    // const [AgeInput, setAgeInput] = useState(state.user.age)

    const handleRegistryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                registration: e.target.value
            }
        });
    }

    const handleageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: parseInt(e.target.value)
            }
        })
    }

    // const handleSave = () => {}

    return (
        <div className='areaLogin'>
            <h3>SignUp Screen do</h3>
            <br />
            <div className="area-sign">
                <input
                    type="text"
                    value={state.user.registration}
                    placeholder='Enter your registration'
                    onChange={handleRegistryInput}
                />
                <input
                    type="text"
                    value={state.user.age}
                    placeholder='Enter your registration'
                    onChange={handleageInput}
                />
                {/* <button className='btn' onClick={handleSave}>🗝️ Salvar</button> */}
            </div>
            <br />
            <Link to='/exibir'>Ir para a tela de ShowData</Link>
        </div>
    )
}

export default SignUp