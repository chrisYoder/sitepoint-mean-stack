import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { List } from '../../models/List';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClientModule) { }
	
	private serverApi = 'https://sitepoint-mean-stack-yftvo.run-us-west2.goorm.io';
	
	public getAllLists(): Observable<List[]> {
		let URI = `${this.serverApi}/bucketlist/`;
		return this.http.get(URI)
			.map(res = res.json())
			.map(res => <List[]>res.lists);
		
	}
	
	public deleteList(listId: string) {
		let URI = `${this.serverApi}/bucketlist/${listId}`;
		let headers = new Headers;
		headers.append('')
	}
}
