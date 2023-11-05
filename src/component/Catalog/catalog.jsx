import { useDispatch, useSelector } from "react-redux";
import { getCarsThunk } from "../../redux/cars/operations";
import { useEffect, useState } from "react";
import { selectCars } from "../../redux/cars/selectors";
import { SectionCar } from "./catalog.styled";

const Catalog = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const [selectedMake, setSelectedMake] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    dispatch(getCarsThunk({ limit, page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (selectedMake) {
      const filtered = cars.filter((car) => car.make === selectedMake);
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  }, [selectedMake, cars]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <section>
        <div>
          <label htmlFor="makeDropdown">Car brand</label>
          <select
            id="makeDropdown"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Chouse your brand</option>
            <option value="Buick">Buick</option>
            <option value="Volvo">Volvo</option>
            <option value="HUMMER">HUMMER</option>
            <option value="Subaru">Subaru</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Lincoln">Lincoln</option>
            <option value="GMC">GMC</option>
            <option value="Hyundai">Hyundai</option>
            <option value="MINI">MINI</option>
            <option value="Bentley">Bentley</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Pontiac">Pontiac</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="BMW">BMW</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Kia">Kia</option>
            <option value="Land">Land</option>
          </select>
        </div>
      </section>
      <SectionCar>
        <ul className="carList">
          {filteredCars
            ? filteredCars.map((car) => {
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
                      <h3 className="blackTitle titlePrice">
                        {car.rentalPrice}
                      </h3>
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

                    <button className="learnBtn" type="button">
                      Learn more
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
        {filteredCars && filteredCars.length > 11 ? (
          <button className="loadBTN" type="button" onClick={loadMore}>
            Load more
          </button>
        ) : null}
      </SectionCar>
    </>
  );
};
export default Catalog;
