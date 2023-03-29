import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import { declarationsCreate, declarationsList } from './components/declarations';
import simpleRestProvider from 'ra-data-simple-rest'

const dataProvider = simpleRestProvider('http://127.0.0.1:8001');


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="declarations" create={declarationsCreate} list={declarationsList} />
  </Admin>
);

export default App;