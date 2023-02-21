import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useLoading } from "../store/Store";

const API_key = "6ac2528edaa00e1647a86ba1e557ad42";

const Home = (props) => {
  const [result, setResult] = useState([]);
  const {loading, setLoading} = useLoading();
  const navigate = useNavigate();
  const gitData = props.data;
  let inputRef = useRef(null);

  const inputWeather = () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value}&cnt=1&appid=${API_key}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchWeather = () => {
    if (result.cod === "200") {
      navigate("/weather", {
        state: {
          data: result,
        },
      });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 500);
  }, [setLoading]);

  const infoStyle =
    "flex justify-center text-[25px] font-semibold mb-[5%] text-slate-600";

  return (
    <div className="mt-[15%]">
      {loading ? <Spinner /> : ''}
      {/* User Info */}
      <div className={infoStyle}>
        {gitData.name !== null ? gitData.name : gitData.login}
      </div>
      <div className={infoStyle}>{gitData.html_url}</div>

      {/* Search Box */}
      <div className="flex mx-auto mt-[15%] p-2 bg-white rounded-md justify-between">
        <input
          className="w-[90%] uppercase text-[20px]"
          ref={inputRef}
          placeholder="City"
          onChange={inputWeather}
        />
        <span className="flex text-[20px] items-center mx-auto">
          <BiSearchAlt />
        </span>
      </div>

      {/* Search Button */}
      <div>
        <button
          className="flex justify-center mx-auto mt-[10%] px-3 py-2 rounded-lg text-white bg-blue-300 hover:bg-blue-600 active:bg-blue-800"
          onClick={fetchWeather}
        >
          Display Weather
        </button>
      </div>
    </div>
  );
};

export default Home;
