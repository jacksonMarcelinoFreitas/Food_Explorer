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
import { Container } from './style';

export function Order(){

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

            <div className='box-orders'>
                <CardOrder data={data}/>
                <CardOrder data={data}/>
                <CardOrder data={data}/>
                <p>Total: R${data.sum.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
            </div>

            <div className='box-payment'>
                <button className='payment-method'>
                    <SiPix />
                    <p>Pix</p>
                </button>
                <button className='payment-method'>
                    <BsFillCreditCard2BackFill />
                    <p>Crédito</p>
                </button>
                <img src={qr_code} alt="qr code payment" />
                <form action="">
                    <Label title='Número do cartão'/>
                    <Input placeholder='0000 0000 0000 0000'/>

                    <Label title='Validade'/>
                    <Input placeholder='04/25'/>

                    <Label title='CVC'/>
                    <Input placeholder='000'/>

                    <Button icon={PiReceipt} title='Finalizar pagamento'/>
                </form>
            </div>

           
        <Footer />

        </Container>
    )
}