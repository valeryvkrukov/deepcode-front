import { Injectable } from '@angular/core';

@Injectable()
export class AppConfiguration {
	public Host = 'http://77.93.34.166';
	public Port = '8088';
	public Path = '/api/demoReport';
	public ApiKey = 'fy2WleGYgJVl8V%2FbDSfjEmrwnDdDGpvX%2Fcc8tLt9SujRCYe15LboUvHBDNdqx49q';

	public getApiUrl() {
		let url = this.Host + ':' + this.Port + this.Path + '?apiKey=' + this.ApiKey;
		/*if (params) {
			url += '&' + params.join('&');
		}*/
		return url;
	}
}
