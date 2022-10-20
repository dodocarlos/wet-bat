export interface AirlabsAirportsOutputDto {
  request: {
    lang: string;
    currency: string;
    time: number;
    id: string;
    server: string;
    host: string;
    pid: number;
    key: {
      id: number;
      api_key: string;
      type: string;
      expired: boolean;
      registered: string;
      limits_by_hour: number;
      limits_by_minute: number;
      limits_by_month: number;
      limits_total: number;
    };
    params: { lang: string };
    version: number;
    method: string;
    client: {
      ip: string;
      geo: {
        country_code: string;
        country: string;
        continent: string;
        city: string;
        lat: number;
        lng: number;
        timezone: string;
      };
      connection: {
        type: string;
        isp_code: number;
        isp_name: string;
      };
      device: Record<any, any>;
      agent: Record<any, any>;
      karma: {
        is_blocked: boolean;
        is_crawler: boolean;
        is_bot: boolean;
        is_friend: boolean;
        is_regular: boolean;
      };
    };
  };
  response: {
    name: string;
    iata_code: string;
    icao_code: string;
    lat: number;
    lng: number;
    country_code: string;
  }[];
  terms: string;
}
