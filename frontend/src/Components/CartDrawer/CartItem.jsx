import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi2'
import { useDispatch } from "react-redux";
import { addToBasket, DecrementItemsToRemoval, RemoveItemFromCart } from '../../Redux/userSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 py-4 border-b">
    <img
      src={item.img}
      alt={item.name}
      className="w-20 h-20 object-cover rounded"
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <h3 className="font-medium">{item.name}</h3>
        <button
        
          className="h-8 w-8 "
          onClick={() => dispatch(RemoveItemFromCart(item))}
        >
          <HiTrash className="h-4 w-4" />
        </button>
      </div>
      <p className="text-muted-foreground">${item.price}</p>
      <div className="flex items-center gap-2 mt-2">
        <button
          className="h-8 w-8"
          onClick={() => dispatch(DecrementItemsToRemoval(item))}
        >
          <HiMinus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          className="h-8 w-8"
          onClick={() =>  dispatch(addToBasket(item))}
        >
          <HiPlus className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>

  )
}
