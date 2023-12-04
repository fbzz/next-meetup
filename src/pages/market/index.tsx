import { Card } from "../../components/Card/card";
import "../../app/globals.css";
import { useMemo, useState } from "react";
import { Cart } from "@/components/Cart/cart";
import { Header } from "@/components/Header/header";
import { Checkout } from "@/components/Checkout/checkout";
import { createPortal } from "react-dom";

export interface MarketItems {
  id: number;
  title: string;
  description: string;
  callToAction: string;
  price: number;
  image: string;
}

const mockData: MarketItems[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for Product 1",
    callToAction: "Buy Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for Product 2",
    callToAction: "Shop Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for Product 3",
    callToAction: "View Details",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for Product 4",
    callToAction: "Add to Cart",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for Product 5",
    callToAction: "Explore",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for Product 6",
    callToAction: "Buy Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description for Product 7",
    callToAction: "Shop Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description for Product 8",
    callToAction: "View Details",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description for Product 9",
    callToAction: "Add to Cart",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description for Product 10",
    callToAction: "Explore",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
];

export default function Market() {
  const [itemsAtCart, setItemsAtCart] = useState<MarketItems[]>([]);
  const [displayCheckout, setDisplayCheckout] = useState(false);

  const totalSum = useMemo(() => {
    return itemsAtCart.reduce((acc, val) => acc + val.price, 0);
  }, [itemsAtCart]);

  const addItemToCard = (id: number) => {
    setItemsAtCart((prev) => [
      ...prev,
      mockData.filter((item) => item.id === id)[0],
    ]);
  };

  const goToCheckout = () => {
    setDisplayCheckout(true);
  };

  const removeItemFromCart = (id: number) => {
    setItemsAtCart((prev) => prev.filter((item) => item.id !== id));
  };

  const onCheckoutFinish = (eventType: "FINISH" | "CANCEL") => {
    if (eventType === "FINISH") {
      setItemsAtCart([]);
    }
    setDisplayCheckout(false);
  };

  return (
    <>
      <Header />
      <div
        className="flex flex-wrap align-center justify-center p-20
    "
      >
        {mockData.map((card, key) => {
          return <Card {...card} key={key} addToCart={addItemToCard} />;
        })}
      </div>
      {itemsAtCart.length > 0 ? (
        <Cart
          count={itemsAtCart.length}
          total={totalSum}
          goToCheckout={goToCheckout}
        />
      ) : null}

      {displayCheckout
        ? createPortal(
            <Checkout
              total={totalSum}
              itemsAtCart={itemsAtCart}
              onRemove={(id) => removeItemFromCart(id)}
              onClose={(eventType) => onCheckoutFinish(eventType)}
            />,
            document.body
          )
        : null}
    </>
  );
}
