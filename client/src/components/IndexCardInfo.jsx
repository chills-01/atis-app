export default function IndexCardInfo({ data }) {
    return (
        <div>
            <p>{data.wind.speed}</p>
            <p>{data.temperature}</p>
            <p>{data.qnh}</p>
            <p>{data.vis}</p>
        </div>
    );
}
