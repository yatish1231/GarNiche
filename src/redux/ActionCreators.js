import * as ACTION_TYPES from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ACTION_TYPES.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
}

export const dishesLoading = () => ({
    type: ACTION_TYPES.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ACTION_TYPES.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ACTION_TYPES.ADD_DISHES,
    payload: dishes
})