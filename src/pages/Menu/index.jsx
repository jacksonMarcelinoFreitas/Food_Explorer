import { ButtonNavigation} from '../../components/ButtonNavigation';
import { Container, ButtonCloseMenu, CardBox } from './style';
import { Footer} from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { FiX, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api }from '../../services/api.js'

export function Menu({isAdmin=true, ...rest}){
	const navigate = useNavigate();
	const { signOut, user } = useAuth();
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	user.isAdmin == 1 ? isAdmin = true : isAdmin = false; 

	const confirmLogout = () => {
		if(confirm('Deseja realmente sair?')){
			signOut();
			navigate('/')
		}
	}

	useEffect (()=> {
		(async function fetchDishes(){
			const response = await api.get(`/dishes?name=${search}`);
			const data = response.data.map((dish) => ({
				...dish,
				price: `R$ ${dish.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`,
				image: `${api.defaults.baseURL}/files/${dish.image}`,
			}))

			setData(data)
		})()
	}, [search]);

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
					onChange={(e) => setSearch(e.target.value)}
				/>
				{isAdmin&&
					<ButtonNavigation title="Novo prato" onClick={() => navigate('/newDish')}/>
				}
				<ButtonNavigation title="Sair" onClick={confirmLogout}/>

				<div className='card-container'>
					{data&&
						data.map(item => (
							<CardBox onClick={()=>{navigate(`/viewDish/${item.id}`)}}>
								<div className='image-dish'>
									<img src={item.image} alt="Dish"/>
								</div>
								<div className='box-description'>
									<p className='dish-name'>{item.name} &#62;</p>
									<span className='dish-description hidden'>{item.description}</span>
									<span className='dish-price'>{item.price}</span>
								</div>
							</CardBox>
						))
					}
				</div>
			</div>
			<Footer/>
		</Container>
	)
}