/**
 * Created by: Ketan Gote
 * Date: 24/10/2018
 * Organization: Individual	
 */
import { HttpClient } from '@angular/common/http';
import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import { User } from '../models/user.model';

@Injectable()
export class GreetingsServiceService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public greetings(greetings: User, onSuccess: (data: User) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.post(CORE_SERVICE_URL.GREETINGSSERVICE + '/greetings/', greetings), onSuccess, onFailure);
	}
}

