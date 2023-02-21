import { useLocation, useNavigate } from "react-router-dom";

const Weather = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state?.data.list;
  let result = [];

  for (const key in initialData) {
    result.push({
      key: key,
      date: location.state.data.list[key].dt_txt,
      temp: ((location.state.data.list[key].main.temp - 273.15) * 9) / 5 + 32,
      description: location.state.data.list[key].weather[key].description,
      main: location.state.data.list[key].weather[key].main,
      pressure: location.state.data.list[key].main.pressure,
      humidity: location.state.data.list[key].main.humidity,
    });
  }
  console.log(result);

  const backBtnHandler = () => {
    navigate("/");
  };

  const tdStyle = "pr-5";

  let res = result.map((data) => {
    const date = new Date(data.date);

    return (
      <table className="flex w-full justify-center mt-[10%]" key={data.key}>
        <tbody className="">
          <tr className="text-left">
            <th>Date</th>
          </tr>
          <tr className="text-left">
            <td className={tdStyle}>(mm/dd/yyyy)</td>
            <td className={tdStyle}>Temp(F)</td>
            <td className={tdStyle}>Description</td>
            <td className={tdStyle}>Main</td>
            <td className={tdStyle}>Pressure</td>
            <td className={tdStyle}>Humidity</td>
          </tr>
          <tr className="text-left">
            <td>{new Intl.DateTimeFormat("en-US").format(date)}</td>
            <td>{data.temp.toFixed()}</td>
            <td>
              {data.description[0].toUpperCase() + data.description.slice(1)}
            </td>
            <td>{data.main}</td>
            <td>{data.pressure}</td>
            <td>{data.humidity}</td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <div>
      <div className="flex justify-center mx-auto">{res}</div>
      <div>
        <button
          className="flex float-right mr-[25%] mt-[10%] text-white px-[5%] py-[1%] rounded-lg bg-blue-400 hover:bg-blue-600 active:bg-blue-800"
          onClick={backBtnHandler}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Weather;
