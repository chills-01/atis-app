import IndexCard from "./IndexCard";

export default function IndexWrapper({ weatherData }) {
    return (
        <div className="index-cards-container"
        style={{
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
            'background-color': 'white',
            'height': 'auto',
            'width': '100%',
            'padding-top': '25px',
        }}>
            {weatherData.map((w) => (
                <IndexCard key={w._id} data={w} />
            ))}
        </div>
    );
}