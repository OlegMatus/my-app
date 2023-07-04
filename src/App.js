import './App.css'
import TheRickAndMorty from "./components/The Rick and Morty";

const App = () => {
    return (
        <div>
            <h1>The Rick And Morty</h1>
            <TheRickAndMorty
                id={'36'}
                name={"Beta-Seven"}
                status={"Alive"}
                species={"Alien"}
                gender={"unknown"}
                image={"https://rickandmortyapi.com/api/character/avatar/36.jpeg"}
            />
            <TheRickAndMorty
                id={'73'}
                name={"Cop Morty"}
                status={"Dead"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/73.jpeg"}
            />
            <TheRickAndMorty
                id={'132'}
                name={"Gar's Mytholog"}
                status={"Dead"}
                species={"Mythological Creature"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/132.jpeg"}
            />
            <TheRickAndMorty
                id={'186'}
                name={"Joyce Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/186.jpeg"}
            />
            <TheRickAndMorty
                id={'292'}
                name={"Rick K-22"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/292.jpeg"}
            />
            <TheRickAndMorty
                id={'483'}
                name={"Steve Jobs Rick"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/483.jpeg"}
            />
        </div>
    );
};

export default App;