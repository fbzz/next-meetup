interface CardProps {
  id: number;
  title: string;
  description: string;
  callToAction: string;
  price: number;
  addToCart: (id: number) => void;
}

export const Card = ({
  id,
  title,
  description,
  callToAction,
  price,
  addToCart,
}: CardProps) => {
  return (
    <div className="card w-96 bg-neutral-900 shadow-xl m-4">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => addToCart(id)}>
            {callToAction}
          </button>
        </div>
      </div>
    </div>
  );
};
