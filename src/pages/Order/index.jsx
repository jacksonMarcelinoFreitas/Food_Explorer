import not_have_order from "../../assets/not_have_order.svg"
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { CardOrder } from '../../components/CardOrder';
import qr_code from "../../assets/qr_code_payment.svg"
import { Container, ButtonPayment } from './style';
import { useUpdateOrder } from "../../hooks/orders"
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { useEffect, useState } from 'react';
import { PiReceipt } from "react-icons/pi";
import { useAuth } from '../../hooks/auth';
import { SiPix } from "react-icons/si";

export function Order(){
    const { user } = useAuth();
    const { updateOrders, fetchOrderDishes, totalPrice, orders } = useUpdateOrder();
    const [selectedTab, setSelectedTab] = useState('pix');

    console.log('Orders:', orders)
    console.log('TotalPrice:', totalPrice)

    let isAdmin
    user.isAdmin == 1 ? isAdmin = true : isAdmin = false ; 

    const handleTabClick = (method) => {
        setSelectedTab(method);
    };

    async function deleteOrder(dish_id){
        try {
            updateOrders({ amountOrder: null, dish_id });
            fetchOrderDishes();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { 
        fetchOrderDishes();
    }, [])

    return(
        <Container>
            <Header isAdmin={isAdmin} />
            {orders && orders.length > 0 ? (
                <div className="wrapper">
                    <div className='box-orders'>
                        <h1>Meu pedido</h1>
                        <div className="cards-scroll">
                            <div className="cards">
                                {orders.map(dish => (
                                    <CardOrder key={`${dish.id}`} data={dish} deleteOrder={deleteOrder} />
                                ))}
                            </div>
                        </div>
                        {totalPrice && 
                            <p className="amount">Total: R${totalPrice.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
                        }
                    </div>
                    <div className="box-wrapper">
                        <h1>Pagamento</h1>
                        <div className="box-square">
                            <div className="box-button">
                                <ButtonPayment className={selectedTab === 'pix' ? 'selected' : ''} onClick={() => handleTabClick('pix')}>
                                    <SiPix size={24} />
                                    <p>Pix</p>
                                </ButtonPayment>
                                <ButtonPayment className={selectedTab === 'card' ? 'selected' : ''} onClick={() => handleTabClick('card')}>
                                    <BsFillCreditCard2BackFill size={24} />
                                    <p>Crédito</p>
                                </ButtonPayment>
                            </div>
                            <div className="box-method">
                                {selectedTab === 'pix' && (
                                    <img src={qr_code} alt="qr code payment" />
                                )}
                                {selectedTab === 'card' && (
                                    <form action="">
                                        <div className="field">
                                            <Label title='Número do cartão' />
                                            <Input placeholder='0000 0000 0000 0000' />
                                        </div>
                                        <div className="field">
                                            <div>
                                                <Label title='Validade' />
                                                <Input placeholder='04/25' />
                                            </div>
                                            <div>
                                                <Label title='CVC' />
                                                <Input placeholder='000' />
                                            </div>
                                        </div>
                                        <Button icon={PiReceipt} title='Finalizar pagamento' />
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="not-have-order">
                    <img src={not_have_order} alt="icon with dish" />
                    <p>Você ainda não<br/>tem pedidos!</p>
                </div>
            )}
            <Footer />
        </Container>
    )
}