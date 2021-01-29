import './App.css';
import Product from './components/Product';

function App() {
  var products = [
    {
      id: 3,
      image: "https://rescom.000webhostapp.com/storage/apiStoreImage/tH9tvFud7XTczJKePhINDRz0X5K7drPh40tsCVYP.jpeg",
      name: "Lẩu nướng 299k",
      price: 120000,
      status: true

    },
    {
      id: 2,
      image: "https://rescom.000webhostapp.com/storage/apiStoreImage/Jz5dnZxNU90BZnTYBjefXUx6AvAkI94SQmDDNnoe.jpeg",
      name: "buffet 199k",
      price: 120000,
      status: false

    },
    {
      id: 1,
      image: "https://rescom.000webhostapp.com/storage/apiStoreImage/SHcR2iODSnhBNU0D0OK50SsP9hovM0AmFDCbVxmw.jpeg",
      name: "Món gọi thêm 99k",
      price: 120000,
      status: true

    },
  ];

  let elements = products.map((product, index) => {
    let result='';
    if(product.status){
      result =<Product key={product.id}
      image={product.image}
      name={product.name}
      price={product.price} />
    }
    return result;
  })
  return (
    <div>
      {elements}
    </div>

  );
}

export default App;
