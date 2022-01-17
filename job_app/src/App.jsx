import React from "react";
import{Box , Grid} from "@material-ui/core"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import JobCard from "./Job/JobCard";

export default ()=>{
  return <>
    <Header/>
      <Grid container justify='center'>
          <Grid>
              <SearchBar/>
              <JobCard/>
          </Grid>
      </Grid>
    </>  
}