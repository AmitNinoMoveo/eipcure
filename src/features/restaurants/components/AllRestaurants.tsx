import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../../../components/Card";
import {
  generateRestaurantPathName,
  onClickCard,
} from "../../../navigation/functions";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { PartialRestaurant } from "../../../utils/interfaces/data/restaurant";
import noChildrenProps from "../../../utils/interfaces/noChildrenComponent";
import { getAllRestaurantsFilterRepo } from "../repository/repository";
import { getRestaurantAction } from "../state/actions";
import { setFilterType } from "../state/restaurantsPageReducer";
import { AllRestaurantsFilter } from "../utils/interface";
import "./AllRestaurants.scss";

type RestaurantsNavProps = noChildrenProps & {
  type: AllRestaurantsFilter;
};

const AllRestaurants: FC<RestaurantsNavProps> = ({
  type,
}: RestaurantsNavProps) => {
  const restaurants = useAppSelector(
    (state) => state.restaurantsPage.restaurants
  );
  const dispatch = useAppDispatch();
  const history = useHistory();
  const fitlerType = useAppSelector(
    (state) => state.restaurantsPage.filterState
  );

  useEffect(() => {
    dispatch(setFilterType(type));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getRestaurantAction(getAllRestaurantsFilterRepo(fitlerType)));
    // eslint-disable-next-line
  }, [fitlerType]);

  return (
    <section className="s-mt">
      <div className="all-restaurants-container inner-container">
        {restaurants.map(({ id, chef, name, picture }: PartialRestaurant) => (
          <CardComponent
            key={id}
            type="medium"
            carousel={false}
            id={id}
            title={name}
            subTitle={chef}
            picture={picture}
            onClick={() => onClickCard(generateRestaurantPathName(id), history)}
          />
        ))}
      </div>
    </section>
  );
};
export default AllRestaurants;
