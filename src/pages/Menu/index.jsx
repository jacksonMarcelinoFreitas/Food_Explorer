import { Container, ButtonCloseMenu } from './style';
import { Input } from '../../components/Input';
import { FiX, FiSearch } from 'react-icons/fi';
import { ButtonNavigation} from '../../components/ButtonNavigation';
import { Footer} from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Menu({isAdmin=true, ...rest}){
	const navigate = useNavigate();
	const { signOut, user } = useAuth();

	user.isAdmin == 1 ? isAdmin = true : isAdmin = false; 

	const confirmLogout = () => {
		if(confirm('Deseja realmente sair?')){
			signOut();
			navigate('/')
		}
	}

	return(
		<Container {...rest}>
			<header>
				<ButtonCloseMenu className='buttonCloseMenu' onClick={() => navigate(-1)}>
					<FiX size={22}/>
					<span>Menu</span>
				</ButtonCloseMenu>
			</header>

			<div className='wrapper-menu'>
				<Input
					placeholder='Busque por pratos ou ingredientes'
					icon={FiSearch}
				/>
				{isAdmin&&
					<ButtonNavigation title="Novo prato" onClick={() => navigate('/newDish')}/>
				}

				<ButtonNavigation title="Sair" onClick={confirmLogout}/>
			</div>

			<Footer/>
		</Container>
	)
}