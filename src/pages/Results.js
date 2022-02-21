import React, { useEffect, useRef, useState } from 'react'
import ResultsTable from '../components/ResultsTable'
import SearchResult from '../components/SearchResult'
import '../App.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Checkbox, Icon, Input, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addLocations } from '../redux/actions';

function Results() {
    const [location, setLocation] = useState("");
    const ref = useRef()
    const [map, setMap] = useState()
    const [service, setService] = useState()
    const [results, setResults] = useState([])
    const [selectedResults, setSelectedResults] = useState([])
    const dispatch = useDispatch()
    const locations = useSelector((state) => {
        return state.locations
    })

    useEffect(() => {
        const map = new window.google.maps.Map(ref.current)
        const service = new window.google.maps.places.PlacesService(map)
        setMap(map)
        setService(service)
    }, []);

    const handleToggle = (result) => () => {
        const currentIndex = selectedResults.findIndex((r) => r.place_id === result.place_id)
        const newSelectedResults = [...selectedResults];

        if (currentIndex === -1) {
            newSelectedResults.push(result);
        } else {
            newSelectedResults.splice(currentIndex, 1);
        }

        setSelectedResults(newSelectedResults);
    };

    const handleAdd = () => {
        dispatch(addLocations(selectedResults))
    }
    const fetchNewLocation = () => {
        service.findPlaceFromQuery({
            query: location,
            fields: ["geometry"]
        }, (results, status) => {
            console.log(results[0].geometry.location)
            service.nearbySearch({
                location: results[0].geometry.location,
                radius: "5000",
                type: ["restaurant"]
            }, (results, status) => {
                setResults(results)
            })
        })

    };
    return (
        <div>
            <h1 className='planner'>your planner</h1>
            <div className='help'>
                <ResultsTable />
            </div>
            <div ref={ref}>
            </div>
            <div className='search-results'>
                <p>{location}</p>
                <Button onClick={fetchNewLocation}>search</Button>
                <Button onClick={handleAdd} type="button">Add</Button>
                <Input value={location} onChange={e => setLocation(e.target.value)} />
                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {results.map((result) => {
                        const labelId = `checkbox-list-secondary-label-${result.place_id}`;
                        const isSelected = locations.findIndex((r) => r.place_id === result.place_id) !== -1
                        if (isSelected) {
                            return null
                        }
                        return (
                            <ListItem
                                key={result.place_id}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(result)}
                                        checked={selectedResults.findIndex((r) => r.place_id === result.place_id) !== -1}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemText id={labelId} primary={`${result.name} (${result.vicinity})`} />
                                </ListItemButton>
                            </ListItem>


                        );
                    })}
                    {/* <div className='resultspg'>
                        <ResultsTable />
                    </div> */}
                </List>
            </div>
            {/* <div className='resultspg'>
                <ResultsTable />
            </div> */}
        </div >
    )
}
export default Results