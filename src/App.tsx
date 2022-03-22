import { useContext } from 'react';
import style from './App.module.css';
import { Routes, Route } from 'react-router-dom'
import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'
import { Context } from './contexts/Contexts'

const App = () => {

  const { state, dispatch } = useContext(Context)

  const changeThemeButton = () => {
    if (state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })
    }
  }

  return (
    <div className={style.App} style={{
      backgroundColor: state.theme.status === 'light' ? '#EEE' : '#454545',
      color: state.theme.status === 'light' ? '#333' : '#F3F3F3'
      }}>
      <div className="header">
        <div className={style.themeInfo}>Theme: {state.theme.status}
          <button onClick={changeThemeButton}>Change theme</button>
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/exibir" element={<ShowData />} />
      </Routes>
    </div>
  );
}

export default App;
