<div className="flex flex-col md:flex-row p-6">
  <img src={product.image} className="w-full md:w-1/2" />
  <div className="md:ml-6">
    <h2 className="text-2xl font-bold">{product.name}</h2>
    <p className="text-gray-600">{product.description}</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-4">Add to Bag</button>
  </div>
</div>