import { ProductCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Home = () => {
  // prettier-ignore
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
  ]

  useTitle('Home');

  return (
    <main>
      <div className="note1">This app is a static demo of a online shop,</div>
      <div className="note1">
        to show how to use React Routes and how to make a hook.
      </div>
      <div className="note2">
        Using React Routes to switch between the pages and making a Hook to
        change the page title.
      </div>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
