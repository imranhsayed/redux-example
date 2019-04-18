import express from 'express';
import React from 'react';
// renderToString is going to take our node application and render it as html in string format
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import App from '../src/App';
import fs from 'fs';

const PORT = process.env.PORT || 3000;

// Read html dist/index.html which contains the production build file called main.js and convert it to string
const html = fs.readFileSync( 'dist/index.html' ).toString();

// Its going to split public/index.js into two parts in string format. One before the text 'not rendered' and the one after that.
const parts = html.split( 'not rendered' );

const app = express();

// This means that anytime anyone makes a request on '/dist' on our node server, it will look inside the dist directory and serve html from there.
app.use( '/dist', express.static( 'dist' ) );

// This will be run on every other request that does not hit the above ( app.use('/dist') ) request handler
app.use( ( req, res ) => {

	// While you are still finishing your server side rendering, it will be loading your css.
	res.write( parts[0] );

	const reactMarkUp = (
		// ServerLocation will pass any url that's be hit on the browser so that App Component inside of it works correctly.
		<ServerLocation url={ req.url }>
			{/*Since we are using babble we can use jsx here*/}
			<App/>
		</ServerLocation>
	);

	// It will a stream of incoming data
	const stream = renderToNodeStream( reactMarkUp );

	/**
	 * It will take stream as it has more data coming from back react rendering, it will pipe that into res
	 * stream pipe is now connected to the res pipe
	 * and end: false , means I am not done yet it still has to write the footer
	 */
	stream.pipe( res, { end: false } );

	// So when it is finished, run the function which is second paaram.
	stream.on( 'end', () => {
		res.write( parts[1] );
		res.end();
	} );
} );

console.log( `listing on PORT ${ PORT }` );

app.listen( PORT );