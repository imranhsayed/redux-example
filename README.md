# redux-example

`git clone https://github.com/imranhsayed/redux-example`

`npm install`

## :zap: Development
`npm run dev`

## :snowflake: Production
`npm run build`

## :seedling: Branch Details
:squirrel: [fetch-posts](https://github.com/imranhsayed/redux-example/tree/fetch-posts) Redux Example to fetch Posts from https://jsonplaceholder.typicode.com/

:school_satchel:[second-example](https://github.com/imranhsayed/redux-example/second-example) Redux Example 


## :snowflake: Steps to take

### :package: Step 1 : INSTALL PACKAGES
`npm i redux react-redux redux-thunk prop-types`

### :video_camera: Step 2 : CREATE ACTIONS
-Create a directory called actions inside src
-Create a file called types.js
-Create an action file called postActions and add an action creator function to create an action
-Each action creator is a function

### :crystal_ball: Step 3 : CREATE REDUCERS
-Create a directory called reducers inside src
-Create a file called postReducers.js inside src/reducers
-Create a file called index.js inside src/reducers and combine your reducers

### :department_store: Step 4 : CREATE STORE
-A Store holds your application state.
-create a file called store.js and create a store using createStore()

### :office: Step 5 : PASS STORE TO MAIN COMPONENT
-Wrap your App.js inside the Provider and pass store to it.

### :octocat: Step 6 : CONNECT AND CALL ACTIONS
-Connect React with redux
-Define proptypes
-Map state to props
-Call Actions ( this.props.fetchPosts() )
