import { TemperatureNowContainer,Location,Temp,Statistics,Info } from './style'
import Pin from '../../assets/pin.svg'
const TemperatureNow = () => {
  return (
    <TemperatureNowContainer>
      <Location>
        <img src={Pin} alt="icone de localização" />
        <strong>Teófilo Otoni - MG</strong>
      </Location>
      <Temp></Temp>
      <Statistics>
        <Info></Info>
      </Statistics>
    </TemperatureNowContainer>
  )
}

export default TemperatureNow
