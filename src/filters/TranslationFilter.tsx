import React from "react";
import ReactDOMServer from "react-dom/server";
interface ErrorMessageInterface {
    message : string | Array<string>;
    statusCode : number;
    out? : any;
}

export default class TranslationFilter{
    source = {
        "unauthorized" : "You are not logged in !",
        "not_found" : "This page is removed ."
    }

    translate(key : string){
        const findSource = this.source[key];
        if(findSource){
            return findSource;
        }
        return key;
    }

    catch(message, statusCode : number) : ErrorMessageInterface{
        if(typeof message == 'string'){
            message = <h2 style={{color:"red"}}>{this.translate(message)}</h2>;
        }else if(Array.isArray(message)){
            message = message.map(m=>this.translate(m));
        }
        message = ReactDOMServer.renderToStaticMarkup(message);
        return({message, statusCode, out : "text"});
    }
}
