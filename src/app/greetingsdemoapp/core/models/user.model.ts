/**
 * Created by: Ketan Gote
 * Date: 24/10/2018
 * Organization: Individual	
 */
export class User
{
	
	name: string;
	greetingMsg: string;
	
	constructor() { 
	}
	
	set setName(value: string) {
		this.name = value;
	}
	get getName() : string {
		return this.name;
	}
	set setGreetingMsg(value: string) {
		this.greetingMsg = value;
	}
	get getGreetingMsg() : string {
		return this.greetingMsg;
	}
	
}
