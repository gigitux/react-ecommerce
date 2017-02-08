import * as types from '../actions/actiontypes';
import { CALL_API } from 'redux-api-middleware';



export function addHouse(id, title, andress, photo, category, location) {
    return {
        type: types.ADD_HOUSE,
        id,
        title,
        andress,
        photo,
        category,
        location
    }
};

export function removeHouse(id) {
    return {
        type: types.REMOVE_HOUSE,
        id
    }
};
export function fetchHouse() {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/house',
            method: 'GET',
            types: [
                types.FETCHHOUSE_REQUEST,
                {
                    type: types.FETCHHOUSE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function postHouse(title,description) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/house',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            types: [
                types.POSTHOUSE_SUCCESS,
                {
                    type: types.POSTHOUSE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function fetchoneHouse(id) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/house/'+ id,
            method: 'GET',
            types: [
                types.FETCHONEHOUSE_REQUEST,
                {
                    type: types.FETCHONEHOUSE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function deletehouse(id) {
  console.log(id)
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/house/'+ id,
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
            }),
            types: [
                types.DELETEHOUSE_REQUEST,
                {
                    type: types.DELETEHOUSE_REQUEST,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function editHouse(id,title,description) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/house/'+ id,
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                description: description
            }),
            types: [
                types.EDITHOUSE_SUCCESS,
                {
                    type: types.EDITHOUSE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function registration(name,surname,email,password) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/registration/',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                surname: surname,
                email : email,
                password: password
            }),
            types: [
                types.REGISTRATION,
                {
                    type: types.REGISTRATION,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function login(username,password) {
  console.log(username,password)
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/login/',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username : username,
                password: password
            }),
            types: [
                types.LOGIN_REQUEST,
                {
                    type: types.LOGIN,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function user(id) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/login/',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: id
            }),
            types: [
                types.FETCH_USER,
                {
                    type: types.FETCH_USER_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function prenotation(id, startDate, endDate, user) {
  if (startDate == null && endDate == null) {
    alert("Selezionare le date")
  }
  else {
    return {
      [CALL_API]: {
          endpoint: 'http://localhost:9000/api/prenotation',
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: id,
              startDate: startDate,
              endDate: endDate,
              user: user
          }),
          types: [
              types.PRENOTATIONHOUSE_REQUEST,
              {
                  type: types.PRENOTATIONHOUSE_SUCCESS,
                  payload: (action, state, res) => {
                      return res.json();
                  }
              },
              'FAILURE'
          ]
      }
    }
  }
}

export function house_prenotate(user) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/house_prenotate',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: user,
            }),
            types: [
                types.HOUSEPRENOTATE_REQUEST,
                {
                    type: types.HOUSEPRENOTATE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function addcomment(id, comment) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/addcomment',
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                comment: comment
            }),
            types: [
                types.ADDCOMMENT_REQUEST,
                {
                    type: types.ADDCOMMENT_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function fetchcomments(id) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/fetchcomment',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
            }),
            types: [
                types.FETCHCOMMENT_REQUEST,
                {
                    type: types.FETCHCOMMENT_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function accept(id, user, startDate) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/accept',
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                user: user,
                startDate: startDate
            }),
            types: [
                types.ACCEPT_REQUEST,
                {
                    type: types.ACCEPT_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}

export function refuse(id, user, startDate) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:9000/api/refuse',
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                user: user,
                startDate: startDate
            }),
            types: [
                types.REFUSE_REQUEST,
                {
                    type: types.REFUSE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                'FAILURE'
            ]
        }
    }
}
