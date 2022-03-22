import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../contexts/Contexts'

export const ShowData = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

    const { state } = useContext(Context)


    return (
        <div className='showData'>
            <h3>ShowData Screen</h3>
            <div className='showdataArea'>
                <p className='regis'>Meu Registro é: {state.user.registration.toUpperCase()}</p>
                <br/>
                <p className='ageArea'>Minha idade é: {state.user.age}</p>
            </div>
            {!state.user.registration &&
                <>
                    <br />
                    <p className='noneAccess'>Acesso Negado</p>
                </>
            }
            <br />
            <Link to='/'>Ir para a tela de Signup </Link>
            <button onClick={handleBackButton}>↩️</button>
        </div>
    )
}