import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useLoading } from "../store/Store";

const Weather = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useLoading();
  const initialData = location.state?.data.list;
  let result = [];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);

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

  const backBtnHandler = () => {
    navigate("/");
  };

  const tdTitleStyle = "pr-8 bg-slate-200";

  let res = result.map((data) => {
    const date = new Date(data.date);

    return (
      <table className="flex w-full justify-center mt-[80px]" key={data.key}>
        <tbody className="border-2 border-slate-600 rounded text-slate-600">
          <tr className="text-left text-[20px]">
            <th>Date</th>
          </tr>
          <tr className="text-left font-semibold text-[20px]">
            <td className={tdTitleStyle}>(mm/dd/yyyy)</td>
            <td className={tdTitleStyle}>Temp(F)</td>
            <td className={tdTitleStyle}>Description</td>
            <td className={tdTitleStyle}>Main</td>
            <td className={tdTitleStyle}>Pressure</td>
            <td className={tdTitleStyle}>Humidity</td>
          </tr>
          <tr className="text-left bg-slate-100">
            <td className="">
              {new Intl.DateTimeFormat("en-US").format(date)}
            </td>
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
      {loading ? <Spinner /> : ""}
      <p className="flex justify-center mt-[50px] text-[35px] font-bold text-blue-800">
        {location.state?.data.city.name ?? location.state?.data.city.name}{" "}
        Weather
      </p>
      <div className="flex justify-center mx-auto">{res}</div>
      <div>
        <button
          className="flex justify-center mx-auto mt-[50px] text-white px-10 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 active:bg-blue-800"
          onClick={backBtnHandler}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Weather;
