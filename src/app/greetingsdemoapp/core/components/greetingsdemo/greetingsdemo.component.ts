/**
 * Created by: Ketan Gote
 * Date: 24/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GreetingsServiceService } from '../../services/greetingsservice.service';
import { User } from './../../models/user.model';

@Component(
{
	selector: 'greetingsdemo',
	templateUrl: 'greetingsdemo.component.html'
})
export class GreetingsdemoComponent implements OnInit {
	user: User;
	successMsgData:any[]=[];
	
	constructor(private greetingsServiceService: GreetingsServiceService, private router: Router) {
		this.user = new User();
	}
	ngOnInit() {
	}
	
	onClick_hello(eventData:any) { 
		this.greetings(eventData);
	}
	private greetings(eventData: any) {
		
	  this.greetingsServiceService.greetings(this.user, this.bindResponseForGreetings_HvW.bind(this), () => {});
	}
	private bindResponseForGreetings_HvW(response: any) {
		this.user.greetingMsg=response.greetingMsg;
	}
	 
}

