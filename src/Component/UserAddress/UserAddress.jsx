import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { AddressCard } from "../AddressCard/AddressCard";
import { AddressForm } from "../AddressForm/AddressForm";
import "./UserAddressStyle.css";

const UserAddress = () => {
  const { authState } = useContext(AuthContext);
  const [isAddressForm, setIsAddressForm] = useState(false);
  const initialAddressForm = {
    name: "",
    house: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    mobileNo: "",
  };
  const [addressForm, setAddressForm] = useState(initialAddressForm);

  return (
    <div className="user-address-container">
      {!authState?.user?.address ? (
        <p>No Address added yet</p>
      ) : (

        <AddressCard
          address={authState?.user?.address}
          setAddressForm={setAddressForm}
          setIsAddressForm={setIsAddressForm}
        />

      )}
      <button
        className="user-address-add-btn"
        onClick={() => setIsAddressForm(true)}
      >
        Add New Address
      </button>
      {isAddressForm && (
        <AddressForm
          setIsAddressForm={setIsAddressForm}
          addressForm={addressForm}
          setAddressForm={setAddressForm}
          initialAddressForm={initialAddressForm}
        />
      )}
    </div>
  );
};
export { UserAddress };
