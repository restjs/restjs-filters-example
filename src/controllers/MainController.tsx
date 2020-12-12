import {HttpException} from "@restjs/core";

export default class MainController{
    index(req, res){
        return "Welcome to Rest-JS framework!!!"
    }

    deletedPage(){
        throw new HttpException("not_found",404);
    }
}
