import * as ACTION_TYPES from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'
import { DISHES  } from '../shared/dishes_garniche' 

export const addComment = (comment) => ({
    type: ACTION_TYPES.ADD_COMMENT,
    payload: {
        dishId: comment.dishId,
        rating: comment.rating,
        author: comment.author,
        comment: comment.comment
    }
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.state + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('Post comments', error.message)
            alert('Your comment could not be posted\nError: '+ error.message)})
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return dispatch(addDishes(DISHES))
}
    // fetch(baseUrl + 'dishes')
    //         .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             }
    //             else {
    //                 var error = new Error('Error ' + response.state + ': ' + response.statusText)
    //                 error.response = response;
    //                 throw error;
    //             }
    //         },
    //             error => {
    //                 var errmess = new Error(error.message);
    //                 throw errmess;
    //             })
    //         .then(response => response.json())
    //         .then(dishes => dispatch(addDishes(dishes)))
    //         .catch(error => dispatch(dishesFailed(error.message)))
    // }
    
    

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

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.state + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errmess) => ({
    type: ACTION_TYPES.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ACTION_TYPES.ADD_COMMENTS,
    payload: comments
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.state + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ACTION_TYPES.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ACTION_TYPES.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ACTION_TYPES.ADD_PROMOS,
    payload: promos
})

//leaders
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.state + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: ACTION_TYPES.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ACTION_TYPES.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ACTION_TYPES.ADD_LEADERS,
    payload: leaders
})

//Feedback
export const postFeedback = (feedback) => (dispatch) => {

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.state + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => alert('Your feedback has been submitted\nFeedback: '+ JSON.stringify(response)))
        .catch(error => { console.log('Post feedback', error.message)
            alert('Your feedback could not be posted\nError: '+ error.message)})

}