import axios from "axios";
import * as process from "process";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Page from "../model/page";
import {Transactee} from "../model";

function indexTransactee() : Promise<Page<Transactee>> {
    return axios.get<Page<Transactee>>(process.env.REACT_APP_API_KEY+"/transactee")
        .then(response => response.data)
        .catch(error => error)
}

export {
    indexTransactee,
}