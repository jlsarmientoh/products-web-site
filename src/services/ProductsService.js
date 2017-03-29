﻿import $ from 'jquery';

class ProductService {

    host = ""
    api = ""

    constructor() {
        this.host = "http://localhost:51376/"
        this.api = "api/products"
    }
    
    getProducts = function (_onSuccess, _onFail, _finally) {
        var requestUrl = this.host + this.api
        this._sendRequest(requestUrl, "GET", null, _onSuccess, _onFail, _finally);
    }

    getProduct = function (_id, _onSuccess, _onFail, _finally) {
        var requestUrl = this.host + this.api + "/" + _id;
        this._sendRequest(requestUrl, "GET", null, _onSuccess, _onFail, _finally);
    }

    createProduct = function (_product, _onSuccess, _onFail, _finally) {
        var requestUrl = this.host + this.api
        this._sendRequest(requestUrl, "POST", _product, _onSuccess, _onFail, _finally);
    }

    _sendRequest(_requestUrl, _type, _body, _onSuccess, _onFail, _finally) {
        $.ajax({
            url: _requestUrl,
            data: _body,
            type: _type,
            dataType: "json"
        }).done(function (result) {
            if (_onSuccess) {
                _onSuccess(result)
            }
        }).fail(function (xhr, status, errorThrown) {
            if (_onFail) {
                _onFail(status, errorThrown);
            }
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function (xhr, status) {
            if (_finally) {
                _finally(xhr, status);
            }
            alert("The request is complete!");
        });
    }
};

var productService = new ProductService();