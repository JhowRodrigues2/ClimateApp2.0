import { Info, ItemsStats, StatisticsContainer } from "./style";

type StatisticsProps = {
  StaticsIcon: string;
  StaticsTitle: string;
  StaticsInfo: string;
  StaticsType: string;
};
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
