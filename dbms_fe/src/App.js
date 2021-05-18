import {BrowserRouter, Route} from 'react-router-dom'; 
import LoginScreen from './screens/login_screen';
import RegisterScreen from './screens/register_screen';
function App() {
  return (
	<BrowserRouter>
	{/* header */}
	<header></header>
		<main>
		<Route path="/" component={LoginScreen} exact></Route>
		<Route path="/register" component={RegisterScreen}></Route>
			
		</main>
		{/* footer */}
		<footer></footer>
	  </BrowserRouter>
  );
}

export default App;
