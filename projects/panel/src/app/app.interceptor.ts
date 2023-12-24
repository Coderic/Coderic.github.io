import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {
    header: HttpHeaders = new HttpHeaders();

    constructor(
        private router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem("access_token")

        if (token != null) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
/*
        req = req.clone({
            /setHeaders: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true,
        });*/

        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        localStorage.clear();
                        if (error.error.message) {
                            alert(error.error.message);
                        }
                        this.router.navigate(['/login'])
                    }
                    if (error.status === 403 || error.status === 0) {
                        alert('No está autorizado para acceder a este recurso');
                    }
                    if (error.status > 500) {
                        localStorage.clear();
                        if (error.error.message) {
                            alert(error.error.message);
                        }
                        this.router.navigate(['/']);
                    }

                    /*
                    if (error.status === 422) {
    
                    }
    
                    if (error.status === 409) {
                        this.router.navigate(['/']);
                    }
                    */
                    return throwError(() => new HttpErrorResponse(error.error.message));
                })
            );
    }
}