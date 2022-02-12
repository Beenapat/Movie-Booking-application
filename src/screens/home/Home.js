import React, { Component } from 'react';
import 'Home.css';

class Header extends Component {
	
	 render() { 
	 
	return( <div>
	<span><h1>Upcoming Movies</h1></span>
	<Home/>
	 
	 </div>
	
	 
	 	 <div>
		 
		 <form>
	  <h1>FIND MOVIES BY:</h1>
	  <input type="text" id="name" name="name" placeholder="Movie Name">
	  <input type="text" id="genres" name="genres" placeholder="Genres">
	  <input type="text" id="artists" name="artists" placeholder="Artists">
	
  <input type="date" id="Date" placeholder="Release day start">
  <input type="date" id="Date" placeholder="Release day end">
  
  <button class="button button1">Apply</button>
	 </div>
	 
	 </form>
	 )
	 
	 
	
	 
	 }