export default function LoginScreen(){
    return(
        <div class="login-page">
				<div class="form">
				<div class="login">
				<div class="login-header">
				<h3>LOGIN</h3>
				<p>Please enter your credentials to login.</p>
				</div>
				</div>
				<form class="login-form" action="home.html">
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password"/>
					<button type="submit">login</button>
					<p class="message">Not registered? <a href="/register">Create an account</a></p>
				</form>
				</div>
			</div>
    )
}