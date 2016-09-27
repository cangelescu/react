var React = require('react');
var AjaxSupport = require('../ajax/ajax');

var RegisterPage = React.createClass({
	getInitialState: function(){
		return {
			firstName:null,
			lastName:null,
			email:null,
			password:null,
			repeatPassword:null
		}
	}
		,isValidInputValue: function(inputValue){
			if (!inputValue || inputValue.trim().length === 0){
				return false;
			}
			return true;
		}
		
		,firstNameChangeHandler : function(event){
			var firstNameValue = event.target.value;
			if (!this.isValidInputValue(firstNameValue)){
				firstNameValue = null;
			}
			this.setState({firstName:firstNameValue});
		}
		
		,lastNameChangeHandler : function(event){
			var lastNameValue = event.target.value;
			if (!this.isValidInputValue(lastNameValue)){
				lastNameValue = null;
			}
			this.setState({lastName:lastNameValue});
		}
		
		,emailNameChangeHandler : function(event){
			var emailValue = event.target.value;
			if (!this.isValidInputValue(emailValue)){
				emailValue = null;
			}
			this.setState({emailName:emailValue});
		}
		
		,passwordNameChangeHandler : function(event){
			var passwordValue = event.target.value;
			if (!this.isValidInputValue(passwordValue)){
				passwordValue = null;
			}
			this.setState({password:passwordValue});
		}
		
		,password2NameChangeHandler : function(event){
			var password2Value = event.target.value;
			if (!this.isValidInputValue(password2Value)){
				password2Value = null;
			}
			this.setState({rpassword:password2Value});
		}
		
		,formSubmitHandler: function(event){
			event.preventDefault();
			console.log(this.state);
			
			if(this.isValidStateForSubmit()){
				AjaxSupport.post({
					url:'/register-user'
					, data:this.state
					, succes: function(){
						console.log("request succes");
					}
					, error :function(){
						console.log("my request failed");
					}
				});
				
				console.log("Form ready for submit");
			}
			else {
				console.log("there bla bla");
			}
		}
		
		,isValidStateForSubmit: function(){
			return this.state.firstName && this.state.lastName && this.state.email && 
				this.state.password && this.state.repeatPassword && (this.state.password === this.state.repeatPassword);
		}
	
	
	,render: function(){
		return(
			<form>
				<input type="text" name="firstName" placeholder="First name" onChange={this.firstNameChangeHandler} /> <br/>
				<input type="text" name="lastName" placeholder="Last name" onChange={this.lastNameChangeHandler} />   <br/>
				<input type="email" name="email" placeholder="Email" onChange={this.emailNameChangeHandler} />		  <br/>
				<input type="password" name="password" placeholder="password" onChange={this.passwordNameChangeHandler} /> <br/>
				<input type="repeatPassword" name="rpassword" placeholder="Repeat password" onChange={this.password2NameChangeHandler} />  <br/>
				
				<button type="submit" onClick={this.formSubmitHandler}> Submit</button>
			</form>
			);
	}
});

module.exports = RegisterPage;<br />