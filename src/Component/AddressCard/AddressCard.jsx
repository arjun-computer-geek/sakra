import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { removeUserAddress } from "../../utils/addressUtils";
import "./AddressCardStyle.css";

const AddressCard = ({ address, setAddressForm, setIsAddressForm }) => {
  const { _id, name, house, city, state, country, pin, mobileNo } = address;
  const { authState, authDispatch } = useContext(AuthContext);
  const encodedToken = authState?.token;

  const editAddress = (
    _id,
    name,
    house,
    city,
    state,
    country,
    pin,
    mobileNo
  ) => {
    setIsAddressForm(true);
    setAddressForm((prev) => ({
      ...prev,
      _id,
      name,
      house,
      city,
      state,
      country,
      pin,
      mobileNo,
    }));
  };

  return (
    <div className="user-address-card-container">
      <p className="user-address-card-name">{name}</p>
      <p>
        {house && `${house},`} {city && `${city},`} {state}
      </p>
      <p>
        PinCode: {pin}, {country}
      </p>
      <p>mobile No. {mobileNo}</p>
      <button
        onClick={() =>
          editAddress(_id, name, house, city, state, country, pin, mobileNo)
        }
      >
        Edit
      </button>
      <button
        onClick={() =>
          removeUserAddress(address._id, encodedToken, authDispatch)
        }
      >
        Delete
      </button>
    </div>
  );
};
export { AddressCard };
