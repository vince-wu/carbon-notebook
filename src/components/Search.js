import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Popout from './Popout'
import { useHistory } from 'react-router-dom'

function Search() {
    const [id, setId] = useState('');
    const [exists, setExists] = useState(false);
    const history = useHistory();
    return(
        <Form inline>
        <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2"
            value={id}
            onChange={e => setId(e.target.value)} 
        />
        <Button 
            className="mr-sm-2"
            type='submit'
            onClick={e=> {

                const sid = id
                const route = '/api/sample_exists/' + sid;
                console.log(route)
                fetch(route).then(res => 
                    res.json().then(data => {
                      setExists(data.exists)
                    })
                  );
                
                if (true) {
                    const path = '/sample/' + id;
                    history.push(path)
                }
                }
            }
        >Search</Button>
        </Form>
    )    
}

export default Search
    
