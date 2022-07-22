import React from 'react';
import { Wrapper } from './styles';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const NavBar: React.FC = () => {
	const history = useHistory();

	return (
		<Wrapper>
			<div className='logo'>
				<img src={Logo} alt='Logo' />
				<h1 onClick={() => history.push('/home')}>Weather</h1>
			</div>
		</Wrapper>
	);
};

export default NavBar;