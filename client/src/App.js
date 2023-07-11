import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Import pages here:
import Home from './pages/home';
import SignUpIntro from './pages/signupintro';
import VendorSignUp from './pages/VendorSignUp';
import BuyerSignUp from './pages/BuyerSignUp';
import Market from './pages/market';
import Login from './pages/login';
import Shop from './pages/shop';
import Cart from './pages/cart';
import VendorDashboard from './pages/vendorDashboard';
import UpdateProduct from './pages/updateProduct';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, {headers}) => {
  const token = Auth.getToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="font">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signupintro" element={<SignUpIntro />}/>
            <Route path="/vendorsignup" element={<VendorSignUp />}/>
            <Route path="/buyersignup" element={<BuyerSignUp />}/>
            <Route path="/welcomescreen" element={<Market />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/dashboard' element={<VendorDashboard />}/>
            <Route path='/updateproduct' element={<UpdateProduct />}/>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
