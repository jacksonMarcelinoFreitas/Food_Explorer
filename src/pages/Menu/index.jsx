import { Container, ButtonCloseMenu } from './style';
import { Input } from '../../components/Input';
import { FiX, FiSearch } from 'react-icons/fi';
import { ButtonNavigation} from '../../components/ButtonNavigation';
import { Footer} from '../../components/Footer';

export function Menu({isAdmin=true, ...rest}){
	return(
		<Container {...rest}>
			<header>
				<ButtonCloseMenu className='buttonCloseMenu'>
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
					<ButtonNavigation title="Novo prato"/>
				}

				<ButtonNavigation title="Sair"/>
			</div>

			<Footer/>
		</Container>
	)
}