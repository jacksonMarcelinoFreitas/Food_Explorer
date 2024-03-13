import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { CardOrder } from '../../components/CardOrder';
import qr_code from "../../assets/qr_code_payment.svg"
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { useEffect, useState } from 'react';
import { PiReceipt } from "react-icons/pi";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { SiPix } from "react-icons/si";
import { Container, ButtonPayment } from './style';

export function Order(){

    const [selectedTab, setSelectedTab] = useState('pix');

    const handleTabClick = (method) => {
        setSelectedTab(method);
    };

    const { user } = useAuth();
    let isAdmin
    
    user.isAdmin == 1 ? isAdmin = true : isAdmin = false ; 
    useEffect(()=>{

    },[]);

    const data = {
        image: 'http://localhost:3333/files/7d5b2c6b3bfab104c17b-image-dish2.png',
        amount: 1,
        name: 'Salada Radish',
        price: 25.97,
        sum: 103.90
    }

    return(
        <Container>
            <Header
                valueOrder={0}
                isAdmin={isAdmin}
            />
            <div className="wrapper">

                <div className='box-orders'>
                    <h1>Meu pedido</h1>

                    <div className="cards">
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                        <CardOrder data={data}/>
                    </div>
                    
                    <p className="amount">Total: R${data.sum.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
                </div>

                <div className="box-wrapper">

                    <h1>Pagamento</h1>

                    <div className="box-square">
                        <div className="box-button">
                            <ButtonPayment className={selectedTab === 'pix' ? 'selected' : ''} onClick={() => handleTabClick('pix')}>
                                <SiPix size={24}/>
                                <p>Pix</p>
                            </ButtonPayment>
                            <ButtonPayment className={selectedTab === 'card' ? 'selected' : ''} onClick={() => handleTabClick('card')}>
                                <BsFillCreditCard2BackFill size={24}/>
                                <p>Crédito</p>
                            </ButtonPayment>
                        </div>
                        
                        <div className="box-method">
                            {selectedTab === 'pix' && (
                                <img src={qr_code} alt="qr code payment"/>
                            )}
                            {selectedTab === 'card' && (
                                <form action="">
                                    <div className="field">
                                        <Label title='Número do cartão'/>
                                        <Input placeholder='0000 0000 0000 0000'/>
                                    </div>
                                    <div className="field">
                                        <div>
                                            <Label title='Validade'/>
                                            <Input placeholder='04/25'/>
                                        </div>
                                        <div>
                                            <Label title='CVC'/>
                                            <Input placeholder='000'/>
                                        </div>
                                    </div>
                                    <Button icon={PiReceipt} title='Finalizar pagamento'/>
                                </form>
                            )}
                        </div>
                    </div>
                </div>


            </div> 
        <Footer />

        </Container>
    )
}