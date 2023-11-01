
import OrderCard from "./OrderCard";

const Orders = () => {
  const orders = [1, 1, 1, 1, 1, 1];

  return (
    <div className="flex flex-items flex-col items-center p-5">
      <h1 className="text-xl text-start py-7 font-semibold">Mis pedidos</h1>
      <div className="space-y-5 w-[90%]">
        {orders.map((item) => (
          <OrderCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
