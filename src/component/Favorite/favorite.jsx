import { useDispatch, useSelector } from "react-redux";
import { selectFavCars } from "../../redux/favorites/selectors";
import { removeCarFromFavorites } from "../../redux/favorites/favSlice";
import { heartSvg2 } from "../Catalog/catalogSvg";
import { SectionCar } from "../Catalog/catalog.styled";
import { useEffect, useState } from "react";
import { setIsOpen } from "../../redux/modal/modalSlice";
import LearnMoreModal from "../../modal/learnMoreModal/learnMore";

const Favorite = () => {
  const dispatch = useDispatch();
  const favCars = useSelector(selectFavCars);
  const [selectedCarId, setSelectedCarId] = useState(0);

  const removeFromFav = (id) => {
    dispatch(removeCarFromFavorites(id));
    };
    useEffect(() => {
        
    },[favCars])
  return (
    <>
      <SectionCar>
        <ul className="carList">
          {favCars.map((car) => {
            const addressParts = car.address.split(",");
            const City = addressParts[1] ? addressParts[1].trim() : "";
            const Country = addressParts[2] ? addressParts[2].trim() : "";
            return (
              <li className="carItem" key={car.id}>
                <img className="imgCar" src={car.img} alt="Car view" />
                <div className="titleDiv">
                  <h3 className="blackTitle margTitle">{car.make}</h3>
                  <h3 className="blurTitle margTitle">{car.model},</h3>
                  <h3 className="blackTitle">{car.year}</h3>
                  <h3 className="blackTitle titlePrice">{car.rentalPrice}</h3>
                </div>

                <ul className="carDescrList">
                  <li>
                    <p className="carDescrItem">{City}</p>
                  </li>
                  <li>
                    <p className="carDescrItem">{Country}</p>
                  </li>
                  <li>
                    <p className="carDescrItem">{car.rentalCompany}</p>
                  </li>
                  <li>
                    <p className="carDescrItem">{car.type}</p>
                  </li>
                  <li>
                    <p className="carDescrItem">{car.make}</p>
                  </li>
                  <li>
                    <p className="carDescrItem">{car.id}</p>
                  </li>
                  <li>
                    <p className="carDescrItem">{car.functionalities[0]}</p>
                  </li>
                </ul>

                <button
                  className="learnBtn"
                  type="button"
                  onClick={() => {
                    dispatch(setIsOpen(true));
                    setSelectedCarId(car.id);
                  }}
                >
                  Learn more
                </button>

                <button
                  onClick={() => {
                    removeFromFav(car.id);
                  }}
                  className="svg"
                  type="button"
                >
                  {heartSvg2}
                </button>
              </li>
            );
          })}
        </ul>
      </SectionCar>
      <LearnMoreModal id={selectedCarId} />
    </>
  );
};
export default Favorite;
