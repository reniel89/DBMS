import {BrowserRouter, Route} from 'react-router-dom'; 
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
	<BrowserRouter>
		<header/>
			<main>
				<Route path="/register" component={RegisterScreen}></Route>
				<Route path="/home" component={HomeScreen}></Route>
				<Route path="/" component={LoginScreen} exact></Route>
			</main>
		<footer/>
	</BrowserRouter>
  );
}

export default App;
