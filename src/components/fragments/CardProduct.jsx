import Button from '../elements/button';
const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm border border-cyan-600 rounded-md overflow-hidden bg-gray-800">{children}</div>;
};

const CardImage = (props) => {
  const { children } = props;
  return (
    <a href="#">
      <img src={children} alt="image" className="w-full aspect-video object-cover" />
    </a>
  );
};

const CardBody = (props) => {
  const { children, productTitle } = props;
  return (
    <div className="p-4">
      <a href="#">
        <h4 className="text-2xl font-bold">{productTitle}</h4>
        <p className="mt-2">{children}</p>
      </a>
    </div>
  );
};

const CardFooter = (props) => {
  const { price } = props;
  return (
    <div className="px-4 pb-4 flex justify-between items-center gap-4">
      <span className="font-bold">{price}</span>
      <Button children="Add to cart"></Button>
    </div>
  );
};

CardProduct.CardImage = CardImage;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;

export default CardProduct;
