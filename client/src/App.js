import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Import pages here:
import Home from './pages/home';
import SignUpIntro from './pages/signupintro';
import VendorSignUp from './pages/VendorSignUp';
import BuyerSignUp from './pages/BuyerSignUp';

const client = new ApolloClient({
  uri: '/graphql',
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
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
