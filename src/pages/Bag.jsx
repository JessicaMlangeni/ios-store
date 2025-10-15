<div className="p-6">
  {cartItems.map(item => (
    <div className="flex justify-between items-center border-b py-4">
      <img src={item.image} className="w-16 h-16" />
      <div>{item.name}</div>
      <div>{item.quantity} x ${item.price}</div>
    </div>
  ))}
  <button className="bg-green-500 text-white px-4 py-2 mt-4">Checkout</button>
</div>