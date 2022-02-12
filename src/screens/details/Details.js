import React, { Component } from 'react';
import 'Details.css';


class Header extends Component {
		 	 	 render() { 
return(

 <button className='button'>Back to Home</button>
  <input type="text" id="name" name="name" placeholder="Movie Name">
	  <input class="input" type="text" id="genres" name="genres" placeholder="Genres">
	  <input type="text" id="artists" name="artists" placeholder="Artists">
	
  <input type="text" id="Date" placeholder="Release day start">
  <input type="date" id="Date" placeholder="Release day end">
  
  )
  
				 }
				 }