import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sing-in/sign-in.component';
import './sign-page.styles.scss';

const SignPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);
export default SignPage;
