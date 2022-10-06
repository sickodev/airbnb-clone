import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays | 26 August to 30 August | 2 guest</p>
                <h1>Stays Nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of Place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and Beds</Button>
                <Button variant='outlined'>More Filters</Button>
            </div>
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
        </div>
    );
}

export default SearchPage;
