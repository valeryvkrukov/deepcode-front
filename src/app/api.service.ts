import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConfiguration } from './app.configuration';

@Injectable()
export class ApiService {
	private apiUrl: string;

	constructor(private http: HttpClient, private _configuration: AppConfiguration) {
		this.apiUrl = _configuration.getApiUrl();
	}

	public getAll<T>(): Observable<T> {
		return this.http.get<T>(this.apiUrl);
	}

	public uploadFile<T>(formData: FormData): Observable<T> {
		let url = this.apiUrl +'&task=frontend';
		return this.http.post<T>(url, formData);
	}

}

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		req.headers.set('Accept', 'application/json');
        return next.handle(req);
	}

}