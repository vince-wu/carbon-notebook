import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

function Search() {
    const [id, setId] = useState('');
    const [exists, setExists] = useState(false);
    const history = useHistory();
    useEffect(() => {
        fetch('/api/sample_exists/' + id).then(res => 
          res.json().then(data => {
            setExists(data.exists)
          })
        );
      }, [id])
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
            onClick={async () => {
                if (exists) {
                    const path = '/sample/' + id;
                    history.push(path)
                }
                return
                }
            }
        >Search</Button>
        </Form>
    )    
}

export default Search
    
