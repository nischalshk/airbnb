import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays 26 august to 30 august 2guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms & beds</Button>
        <Button variant="outlined">More Filters</Button>

        <SearchResult
          img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          location="Private room in the center of KTM"
          title="Stay at this luxirious home"
          description="1 guest . 1 bedroom . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine "
          star={4.2}
          price="$20 / night"
          total="$100 total"
        />

        <SearchResult
          img="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
          location="Private room in the center of KTM"
          title="Stay at this luxirious home"
          description="1 guest . 1 bedroom . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine "
          star={4.2}
          price="$20 / night"
          total="$100 total"
        />
      </div>
    </div>
  );
}

export default SearchPage;
