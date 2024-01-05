import CardProduct from '../components/fragments/CardProduct';

const ProductPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-4 text-neutral-200 bg-slate-900">
      <CardProduct>
        <CardProduct.CardImage children="https://images.unsplash.com/photo-1554133818-7bb790d55236?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <CardProduct.CardBody productTitle="Mager Hiking Boots">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo soluta dolores.</CardProduct.CardBody>
        <CardProduct.CardFooter price="Rp.850.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.CardImage children="https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHNob2VzfGVufDB8fDB8fHww" />
        <CardProduct.CardBody productTitle="Nike Air Athletic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo soluta dolores.</CardProduct.CardBody>
        <CardProduct.CardFooter price="Rp.1.250.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.CardImage children="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <CardProduct.CardBody productTitle="Converse All Star">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo soluta dolores.</CardProduct.CardBody>
        <CardProduct.CardFooter price="Rp.1.500.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
