import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.css']
})
export class Client1Component implements OnInit {
	private data: any[];
	public response: any[];
	
	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService
			.getAll<any[]>()
			.subscribe((data: any[]) => this.data = data, error => () => {
				console.log('error');
			},
			() => {
				let records = [];
				this.data['records'].map(record => {
					let clientId: string = record.clientId,
						clientCount: number = 0,
						cardId: string,
						monthName: string,
						dataCount: number = 0,
						rowsCount: number,
						dateTime: Date,
						transactionType: string,
						amount: number;
					record.creditCards.map(card => {
						cardId = card.id;
						rowsCount = 0;
						Object.keys(card.monthsData).map((key: string) => {
							monthName = Moment().month((parseInt(key) - 1)).format('MMMM');
							dataCount = card.monthsData[key].rows.length;
							card.monthsData[key].rows.map(month => {
								let row = {
									clientId: clientId,
									creditCardId: cardId,
									month: monthName,
									dataCount: dataCount,
									timeStamp: Moment(month.timeStamp).format('MMM DD, YYYY hh:mm:ss A'),
									transactionType: month.type,
									amount: month.amount
								};
								records.push(row);
								cardId = null;
								clientId = null;
								monthName = null;
								dataCount = null;
								clientCount++;
								rowsCount++;
							});
						});
						records[(records.length - rowsCount)].creditCardCount = rowsCount;
					});
					records[(records.length - clientCount)].clientCount = clientCount;
				});
				this.response = records;
			});
	}

}
