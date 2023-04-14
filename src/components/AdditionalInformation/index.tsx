import { useContext } from "react";
import Statistics from "../Statistics";
import { StatisticsContainer } from "../Statistics/style";
import { AditionalInformationContainer, WeatherImagem } from "./style";
import { GlobalContext } from "../../context";
import TempWind from "../../assets/temp-wind.svg";
import TempHumidity from "../../assets/temp-humidity.svg";
import TempCloud from "../../assets/clouds.svg";
import SunnyDay from "../../assets/sunny_day.svg";
import TempCloudy from "../../assets/temp-cloudy.svg";
import ColdWeather from "../../assets/cold-weather.svg";
import Initial from '../../assets/initial.svg'


const AditionalInformation = () => {
  const {climateData} = useContext(GlobalContext);
  return (
    <AditionalInformationContainer>
      {climateData ? (
        <>
          <StatisticsContainer>
            <Statistics
              StaticsIcon={TempWind}
              StaticsTitle={"Vento"}
              StaticsInfo={climateData.wind.speed}
              StaticsType={"hm/h"}
            />
            <Statistics
              StaticsIcon={TempHumidity}
              StaticsTitle={"Umidade"}
              StaticsInfo={climateData.main.humidity}
              StaticsType={"%"}
            />
            <Statistics
              StaticsIcon={TempCloud}
              StaticsTitle={"Nuvens"}
              StaticsInfo={climateData.clouds.all}
              StaticsType={"%"}
            />
          </StatisticsContainer>
        </>
      ) : (
        ""
      )}
      {climateData ? (
        <WeatherImagem>
          {climateData.main.feels_like > 25 ? (
            <img src={SunnyDay} alt="Imagem Dia Ensolarado" />
          ) : climateData.main.feels_like > 5 &&
            climateData.main.feels_like < 25 ? (
            <img src={TempCloudy} alt="Imagem Dia Nublado" />
          ): climateData.main.feels_like < 5 ? (
            <img src={ColdWeather} alt="Imagem Dia Nevando" />
          ): <img src={Initial} alt="Imagem Dia Nevando" />}
        </WeatherImagem>
      ) : (
        ""
        )}

    </AditionalInformationContainer>
  );
};

export default AditionalInformation;
