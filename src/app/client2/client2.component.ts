import { Component, ViewChild } from '@angular/core';
import * as Moment from 'moment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.css']
})
export class Client2Component {
	@ViewChild('fileInput') fileInput;
	public succeeded: any[];
	public errors: string[];

	constructor(private apiService: ApiService) { }

	formatDate(date: string) {
		return Moment(date).format('MMM DD, YYYY hh:mm:ss A');
	}

	uploadFile() {
		let input = this.fileInput.nativeElement;
		this.succeeded = null;
		this.errors = null;
		if (input.files && input.files[0]) {
			let formData = new FormData();
			formData.append('file', input.files[0]);
			this.apiService
				.uploadFile(formData)
				.subscribe(response => {
					if (response['errors'] && response['errors'].length) {
						this.errors = response['errors'];
					} else if (response['succeeded'] && response['succeeded'].length) {
						this.succeeded = response['succeeded'];
						console.log(response['succeeded']);
					}
					input.files = null;
				});
		}
	}

}
