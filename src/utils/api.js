class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _returnRes(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
            method: "GET",
            headers: this._headers,
        })
            .then(res => {
                return this._returnRes(res);
            })
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            method: "GET",
            headers: this._headers,
        })
            .then(res => {
                return this._returnRes(res);
            })
    }

}

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "bf6a8c78-b245-4594-801d-fa3b505682c7",
        "Content-Type": "application/json"
    }
});

export default api;