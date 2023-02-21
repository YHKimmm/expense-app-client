import { GoogleLogin } from '@react-oauth/google';
import { ThirdPartySignIn } from '../services/authentication';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ThirdPartySignInByGoogle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        console.log(response);
        ThirdPartySignIn(dispatch, response.credential)
    }

    return (
        <div className='mt-4 m-auto d-flex justify-content-center'>
            <GoogleLogin
                onSuccess=
                {
                    r => {
                        responseGoogle(r);
                        navigate('/');
                        console.log('Success ', r)
                    }}
                onFailure={e => console.log('Error ', e)}
                style={{ display: 'block' }}
            />
        </div>
    )
}

export default ThirdPartySignInByGoogle;