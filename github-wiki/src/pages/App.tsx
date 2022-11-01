
import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {

    const [currentRepo, setCurrentRepo] = useState('');
    const [repos, setRepos] = useState([]);

    async function handleSearchRepo () {
        let data:never = await api.get(`repos/${currentRepo}`);

        // if(data['id']){
            setRepos(prev => [...prev, data]);
        //     setCurrentRepo('');
        // }
            // alert('Repositório não encontrado!');
        
    }

    function handleRemoverRepo (id:number){
        let reposFilter = repos.filter((r) => r['id'] !== id);
        setRepos(reposFilter);
    }

    return (
        <Container>
            <Input value={currentRepo} setOnChange={(e:any) => setCurrentRepo(e.target.value)} />
            <Button onClick={handleSearchRepo} />
            {repos.map((repo) => <ItemRepo key={repo['id']} repo={repo} handleRemoverRepo={handleRemoverRepo} />)
            }
        </Container>
    );
}

export default App;
