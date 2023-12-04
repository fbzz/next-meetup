import { MarketItems } from "@/pages/market";

interface CheckoutProps {
  itemsAtCart: MarketItems[];
  total: number;
  onRemove: (id: number) => void;
  onClose: (eventType: "FINISH" | "CANCEL") => void;
}

export const Checkout = ({
  itemsAtCart,
  total,
  onClose,
  onRemove,
}: CheckoutProps) => {
  const submit = () => {
    alert("Thanks! ");
    onClose("FINISH");
  };

  const cancel = () => {
    onClose("CANCEL");
  };

  return (
    <div
      className="fixed w-6/12 h-full bg-white top-0 right-0 z-50 text-black flex items-center flex-col p-20 overflow-auto"
      id="checkout"
    >
      <h1 className="font-extrabold ">Checkout</h1>
      <div className="divider divider-primary font-extrabold">Items</div>

      {itemsAtCart.map((item) => {
        return (
          <>
            <div className="flex w-full ">
              <div className="flex-2">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-lg"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex-1 p-5">
                <p className="font-extrabold">{item.title}</p>
                <span className="font-extralight">{item.description}</span>
              </div>
              <div className="flex-2 p-5">
                <p>$ {item.price}</p>
                <p
                  className="text-red-500 cursor-pointer"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </p>
              </div>
            </div>

            <div className="divider"></div>
          </>
        );
      })}

      <div className="divider divider-primary font-extrabold">Total</div>
      <div>${total}</div>
      <div className="divider divider-primary"></div>
      <div className="flex space-x-2">
        <button className="btn btn-primary text-white" onClick={submit}>
          Finish checkout!
        </button>
        <button className="btn btn-danger text-white" onClick={cancel}>
          Cancel!
        </button>
      </div>
    </div>
  );
};
