import useCountKeysDown from "../hooks/useCountKeysDown";

export default function KeysCount() {
    // Custom hook to count the number of keys down
    const keysCount = useCountKeysDown();

    return <h2>{keysCount}</h2>;
}
