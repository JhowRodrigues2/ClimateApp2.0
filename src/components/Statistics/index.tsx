import { Info, ItemsStats } from "./style";
import { StatisticsProps } from "../../interfaces";

const Statistics = ({
  StaticsIcon,
  StaticsTitle,
  StaticsInfo,
  StaticsType,
}: StatisticsProps) => {
  return (
    <ItemsStats>
      <img src={StaticsIcon} />
      <Info>
        <>
          <p>{StaticsTitle}</p>
        </>
        <><h5>
          {StaticsInfo}
          <span>{StaticsType}</span>
        </h5>
        </>

      </Info>
    </ItemsStats>
  );
};

export default Statistics;
