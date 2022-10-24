import { MouseEvent, useRef } from 'react';
import { login } from '../api';
import Input from '../components/Input';
import { LoginUserDto } from '../types';

// TODO: add validators to inputs
const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>();

    const onSumbit = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!emailRef.current) return;

        const email = emailRef.current.value;
        try {
            const accessToken = await login({ email });
            console.log(accessToken);
        } catch (error) {
            // TODO: add error handling and display them in proper way
            console.error(error);
        } finally {
            emailRef.current.value = '';
        }
    }

    return (
        <div className="full-screen center-content">
            <form onSubmit={onSumbit}>
                <Input
                    type='email'
                    placeholder='Email'
                    innerRef={emailRef}
                />
                <button> Log in </button>
            </form>
        </div>
    );
}

export default LoginPage;