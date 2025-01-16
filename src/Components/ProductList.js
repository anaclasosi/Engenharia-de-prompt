const ProductList = ({ products, onSelectItem, category }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{category}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onSelectItem(category, product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {product.nome} - R${product.preco}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;