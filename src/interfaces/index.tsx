import { ReactNode } from "react";

export interface ContextProps {
  children: ReactNode;
}

export interface WeatherData {
  name: string;

  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;

  main: {
    temp: number;
    feels_like: number | string;
    humidity: number;
  };

  wind: {
    speed: number;
  };

  clouds: {
    all: number;
  };

  sys: {
    country: string;
    sunrise: string | number;
    sunset: string | number;
  };
}

export interface StatisticsProps {
  StaticsIcon: string;
  StaticsTitle: string;
  StaticsInfo: string;
  StaticsType?: string;
};