import { useState } from "react";
import Form from "./components/Form";
import UniversitiesList from "./components/UniversitiesList";
import Filter from "./components/Filter";
import KeysCount from "./components/KeysCount";

function App() {
    // State to store the input value, default is "United States" for this example
    const [inputValue, setInputValue] = useState("United States");
    // State to store the list of universities
    const [universities, setUniversities] = useState([]);
    // State to store the sort flag
    const [sort, setSort] = useState(false);

    return (
        <>
            <KeysCount />
            <Form
                inputValue={inputValue}
                setInputValue={setInputValue}
                setUniversities={setUniversities}
            />
            <Filter setSort={setSort} />
            <UniversitiesList
                inputValue={inputValue}
                universities={universities}
                setUniversities={setUniversities}
                sort={sort}
            />
        </>
    );
}

export default App;
