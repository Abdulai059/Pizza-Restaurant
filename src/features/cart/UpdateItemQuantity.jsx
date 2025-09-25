import Button from "@/ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2  md:gap-3">
      <Button variant="round" onClick={handleDecQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button variant="round" onClick={handleIncQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
