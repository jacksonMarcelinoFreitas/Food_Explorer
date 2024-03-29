//Criando contexto
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const OrderContext = createContext({})

function OrderProvider({children}){
  const [orders, setOrders] = useState(0);
  const [dishOrders, setDishOrders] = useState({});

  //só busca pelos pedidos
  async function fetchOrderDishes(){
    try {
      const response = await api.get(`/dish/commonDishesOrders/orders/dishes`);
      const { orderDishes, totalPrice } = response.data;

      setDishOrders({orderDishes, totalPrice});
  
    } catch (error) {
        console.log(error)
    }
  }

  //Atualiza os pedidos
  async function updateOrders({ isLiked, amountOrder, dish_id }){
    try {
      const response = await api.put(`/dish/commonDishesOrders/orders`, { isLiked, amountOrder, dish_id });
      const { orderDishes, amountOrders  } = response.data;

      localStorage.setItem("@food_explorer:orders", JSON.stringify({ amountOrders }))

      setOrders({ amountOrders, orderDishes })

    } catch (error) {

      if(error){

        toast.error(`${error}`)
        console.error(error);

      }else{

        toast.error('Não foi possível atualizar os pedidos');

      }
    }
  }

  useEffect(() => {
    const dataString = localStorage.getItem("@food_explorer:orders");
    const amountOrders = JSON.parse(dataString);
    
    if(amountOrders !== undefined){  
      setOrders(amountOrders);
    }else{
      setOrders(0);
    }
  }, [])

  /*
  1. função para update das pedidos e like
  2. função para buscar os pratos
  3. total de pedidos
  4. pedidos
  5. preco total do pedidos
  */
  return(
    <OrderContext.Provider value={{
        updateOrders,
        fetchOrderDishes,
        totalAmountOrders: orders.amountOrders,
        orders: dishOrders.orderDishes,
        totalPrice: dishOrders.totalPrice
    }}>
      {children}
    </OrderContext.Provider>
  )

}

function useUpdateOrder(){
  const context = useContext(OrderContext);
  return context;
}

export {OrderProvider, useUpdateOrder}