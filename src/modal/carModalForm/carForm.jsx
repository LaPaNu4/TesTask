import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCarByIdforModal,
  selectModalCar,
  setIsOpen,
} from "../../redux/modal/modalSlice";
import { FormDiv } from "./carFrom.styled";
import { xBtn } from "./carFormSvg";

const CarForm = ({ id }) => {
  const dispatch = useDispatch();
  const modalCar = useSelector(selectModalCar);
  console.log(modalCar);
  useEffect(() => {
    dispatch(getCarByIdforModal({ id }));
  }, [dispatch, id]);

  if (modalCar && modalCar.length > 0) {
    const rentalConditions = modalCar[0].rentalConditions;
    const conditionsArray = rentalConditions.split(",");
    const minimumAge = conditionsArray[0].trim(); // "Minimum age: 25"
    const validLicense = conditionsArray[1].trim(); // "Valid driver's license"
    const securityDeposit = conditionsArray[2].trim(); // "Security deposit required"
    const addressParts = modalCar[0].address.split(",");
    const City = addressParts[1] ? addressParts[1].trim() : "";
    const Country = addressParts[2] ? addressParts[2].trim() : "";
    const minimumAgeParts = minimumAge.split(" "); // Розділити рядок за пробіли
    const minimumAgeNumber = parseInt(
      minimumAgeParts[minimumAgeParts.length - 1]
    ); // Отримати останній елемент як число
    return (
      <FormDiv>
        <button
          onClick={() => {
            dispatch(setIsOpen(false));
          }}
          className="xBtn"
          type="button"
        >
          {xBtn}
        </button>
        <img className="imgCar" src={modalCar[0].img} alt="Car view" />
        <div className="titleDiv">
          <h3 className="blackTitle margTitle">{modalCar[0].make}</h3>
          <h3 className="blurTitle margTitle">{modalCar[0].model},</h3>
          <h3 className="blackTitle margTitle">{modalCar[0].year}</h3>
        </div>
        <ul className="carDescrList">
          <li>
            <p className="carDescrItem">{City}</p>
          </li>
          <li>
            <p className="carDescrItem">{Country}</p>
          </li>
          <li>
            <p className="carDescrItem">Id: {modalCar[0].id}</p>
          </li>
          <li>
            <p className="carDescrItem">Year: {modalCar[0].year}</p>
          </li>
          <li>
            <p className="carDescrItem">Type: {modalCar[0].type}</p>
          </li>
          <li>
            <p className="carDescrItem">
              Fuel Consumption: {modalCar[0].fuelConsumption}
            </p>
          </li>
          <li>
            <p className="carDescrItem">
              Engine Size: {modalCar[0].engineSize}
            </p>
          </li>
        </ul>
        <p className="description">{modalCar[0].description}</p>
        <div className="acesDiv">
          <h2 className="titleMass">Accessories and functionalities:</h2>
          <ul className="listMass">
            <li>
              <p className="itemMass carDescrItemAft">
                {modalCar[0].accessories[0]}
              </p>
            </li>
            <li>
              <p className="itemMass margTitle carDescrItemAft">
                {modalCar[0].accessories[1]}
              </p>
            </li>
            <li>
              <p className="itemMass margTitle">{modalCar[0].accessories[2]}</p>
            </li>
          </ul>
          <ul className="listMass">
            <li>
              <p className="itemMass carDescrItemAft">
                {modalCar[0].functionalities[0]}
              </p>
            </li>
            <li>
              <p className="itemMass margTitle carDescrItemAft">
                {modalCar[0].functionalities[1]}
              </p>
            </li>
            <li>
              <p className="itemMass margTitle">
                {modalCar[0].functionalities[2]}
              </p>
            </li>
          </ul>
        </div>
        <div className="rentDiv">
          <h2 className="rentTitle">Rental Conditions: </h2>
          <div className="rentDescr">
            <p className="rentItem">
              Minimum age:
              <span style={{ color: "#3470FF" }}>{minimumAgeNumber}</span>
            </p>
            <p className="rentItem">{validLicense}</p>
          </div>
          <div className="rentDescr">
            <p className="rentItem">{securityDeposit}</p>
            <p className="rentItem">
              Mileage:
              <span style={{ color: "#3470FF" }}>
                {Number(modalCar[0].mileage).toLocaleString()}
              </span>
            </p>
            <p className="rentItem">
              Price:{" "}
              <span style={{ color: "#3470FF" }}>
                {modalCar[0].rentalPrice}
              </span>
            </p>
          </div>
        </div>

        
          <a className="rentCar" href="tel:+380730000000">
            Rental car
          </a>
        
      </FormDiv>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default CarForm;
