import './App.css';
import Simpsons from './components/Simpsons/Simpsons';

function App() {
    return (
        <div>
            <h1>Simpsons Family</h1>
            <Simpsons
                name={'Homer'}
                surname={'Simpson'}
                age={40}
                gender={'male'}
                photo={'https://www.freepnglogos.com/uploads/simpsons-png/homer-simpson-simpsons-wiki-fandom-powered-wikia-39.png'}
            />
            <Simpsons
                name={'Marge'}
                surname={'Simpson'}
                age={38}
                gender={'female'}
                photo={'https://www.freepnglogos.com/uploads/simpsons-png/thomas-dafoe-studios-the-simpsons-png-pack-40.png'}
            />
            <Simpsons
                name={'Bart'}
                surname={'Simpson'}
                age={10}
                gender={'male'}
                photo={'https://www.freepnglogos.com/uploads/simpsons-png/simpsons-cartoon-characters-new-png-34.png'}
            />
            <Simpsons
                name={'Lisa'}
                surname={'Simpson'}
                age={8}
                gender={'female'}
                photo={'https://www.freepnglogos.com/uploads/simpsons-png/simpsons-lisa-simpson-dhamma-wiki-21.png'}
            />
            <Simpsons
                name={'Maggie'}
                surname={'Simpson'}
                age={1}
                gender={'female'}
                photo={'https://www.freepnglogos.com/uploads/simpsons-png/simpsons-maggie-simpson-wikipedia-3.png'}
            />
        </div>
    );
}

export default App;
