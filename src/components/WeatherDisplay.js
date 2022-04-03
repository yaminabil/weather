export default function WeatherDisplay(props) {
  const weather = props.weather;

  const loaded = () => {
    return (
      <div className="Card">
        <h1> {weather.name} </h1>
        <h1>{weather.weather[0].main}</h1>
        <h1>{weather.weather[0].description}</h1>
      </div>
    );
  };
  const loading = () => {
    return <h1> no data</h1>;
  };

  return weather && weather.name ? loaded() : loading();
}
