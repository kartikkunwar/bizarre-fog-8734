import axios from 'axios';

export const auth_actions = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const auth_request = () => ({
  type: auth_actions.REQUEST,
});

export const auth_success = (payload) => ({
  type: auth_actions.SUCCESS,
  payload,
});

export const auth_failure = () => ({
  type: auth_actions.FAILURE,
});

export const signup_attemp = (payload, navigate) => {
  axios
    .post(
      `https://orbitz-heroku-data.herokuapp.com/users`,
      payload
    )
    .then((res) => {
      alert('You have Successful signup');
      navigate('/signin');
    })
    .catch((err) => {
      alert('Something went Wrong plaese try again');
    });
};

export const signin_attemp = (payload) => (dispatch) => {
  dispatch(auth_request);
  axios
    .get(
      `https://orbitz-heroku-data.herokuapp.com/users?email=${payload.email}&password=${payload.password}`
    )
    .then((res) => {
      if (res.data.length === 0) {
        alert('user not found please try again');
      } else {
        dispatch(auth_success(res.data));
        alert('you login successful');
      }
   
    })
    .catch((err) => {
      console.log('err:', err);
      dispatch(auth_failure());
      alert('fail');
    });
};