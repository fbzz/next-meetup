interface CartProps {
  count: number;
  total: number;
  goToCheckout: () => void;
}

export const Cart = ({ count, total, goToCheckout }: CartProps) => {
  return (
    <div className="fixed bottom-0 h-16 flex w-full justify-center font-semibold">
      <div className=" w-4/12 bg-primary h-full flex justify-between place-items-center rounded-t-md px-10 ">
        You have {count} Products at the cart, Total: ${total}
        <button
          className="btn btn-secondary ml-3 text-white"
          onClick={() => goToCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
