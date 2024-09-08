import { fetchUniversities } from "../api/fetchUniversities";
import { useEffect } from "react";
import { returnSortedData } from "../helpers/returnSortedData";

export default function UniversitiesList({
    inputValue,
    universities,
    setUniversities,
    sort,
}) {
    // useEffect only runs once when the component is mounted
    useEffect(() => {
        // fetchUniversities is a function that returns the universities
        fetchUniversities(inputValue).then((universities) => {
            setUniversities(universities);
        });
    }, []);

    return (
        <>
            {returnSortedData({ universities, sort }).map(
                (university, index) => {
                    return (
                        <div key={index}>
                            <h2>{university.name}</h2>
                            <a href={university.web_pages[0]}>
                                {university.web_pages[0]}
                            </a>
                            <hr />
                        </div>
                    );
                }
            )}
        </>
    );
}
