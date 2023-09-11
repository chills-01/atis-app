import IndexCard from "./IndexCard";

export default function IndexWrapper({ weatherData }) {
    return (
        <>
            {weatherData.map((w) => (
                <IndexCard key={w._id} data={w} />
            ))}
        </>
    );
}
