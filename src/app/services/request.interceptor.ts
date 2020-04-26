import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const newRequest = request.clone({
            setParams: {
                api_key: '9d3a117c7da4a8a5db62a68b8331e81a',
                language: JSON.parse(localStorage.getItem('language')).value 
            }
        })
        return next.handle(newRequest)

    }

}