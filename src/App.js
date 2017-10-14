import React from 'react';
// import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar'

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
    business,
    business,
    business,
    business,
    business,
    business
];

class App extends React.Component {
    searchYelp(term, location, sortBy) {
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    }
    
    render() {
        return (
            <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={this.searchYelp} />
            <BusinessList businesses={businesses} />
            </div>
        );
    }
}

export default App;

//Congratulations! You completed the second part of the Ravenous project. Let's briefly review what you did:

// — Moved business information to the container component (App)
// — Passed information from parent components (App) to child components (BusinessList, Business)
// This is typical of the flow of information in React apps. You'll continue to build on this structure as you move on to future parts of this project.

// Finally, reflect on the knowledge you used in this project. As you do so, consider the following questions:

// — The "Let's Go" button doesn't do anything at the moment. How might you simulate a query to the Yelp API?
// — A user may decide to search with a different sorting option (for example, "Highest Rated", or "Most Reviewed"). How can you handle this change in state using React?

// We'll expand the search bar in the coming weeks to address the questions above (and more).