import axios from 'axios'

const API_KEY = process.env.REACT_APP_KEY
const URL = 'https://api.openweathermap.org/data/2.5/weather?'
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

let output = {
  coord: {
    lon: -79.4163,
    lat: 43.7001
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n'
    }
  ],
  base: 'stations',
  main: {
    temp: 275.65,
    feels_like: 269.99,
    temp_min: 273.26,
    temp_max: 277.31,
    pressure: 1011,
    humidity: 73
  },
  visibility: 10000,
  wind: {
    speed: 8.23,
    deg: 50
  },
  clouds: {
    all: 0
  },
  dt: 1676244906,
  sys: {
    type: 2,
    id: 2043365,
    country: 'CA',
    sunrise: 1676204466,
    sunset: 1676241773
  },
  timezone: -18000,
  id: 6167865,
  name: 'Toronto',
  cod: 200
}

let output2 = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1676257200,
      main: {
        temp: 274.36,
        feels_like: 274.36,
        temp_min: 274.36,
        temp_max: 274.49,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 991,
        humidity: 80,
        temp_kf: -0.13
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.15,
        deg: 118,
        gust: 1.44
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-13 03:00:00'
    },
    {
      dt: 1676268000,
      main: {
        temp: 274.25,
        feels_like: 274.25,
        temp_min: 274.23,
        temp_max: 274.25,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 989,
        humidity: 78,
        temp_kf: 0.02
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 0.98,
        deg: 214,
        gust: 1.19
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-13 06:00:00'
    },
    {
      dt: 1676278800,
      main: {
        temp: 273.97,
        feels_like: 271.45,
        temp_min: 273.97,
        temp_max: 273.97,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 34
      },
      wind: {
        speed: 2.17,
        deg: 226,
        gust: 3.31
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-13 09:00:00'
    },
    {
      dt: 1676289600,
      main: {
        temp: 273.75,
        feels_like: 270.56,
        temp_min: 273.75,
        temp_max: 273.75,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 985,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 43
      },
      wind: {
        speed: 2.79,
        deg: 206,
        gust: 7.96
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-13 12:00:00'
    },
    {
      dt: 1676300400,
      main: {
        temp: 275.28,
        feels_like: 271.49,
        temp_min: 275.28,
        temp_max: 275.28,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 3.99,
        deg: 218,
        gust: 10.87
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-13 15:00:00'
    },
    {
      dt: 1676311200,
      main: {
        temp: 278.81,
        feels_like: 275.34,
        temp_min: 278.81,
        temp_max: 278.81,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 981,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 75
      },
      wind: {
        speed: 4.93,
        deg: 257,
        gust: 9.31
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-13 18:00:00'
    },
    {
      dt: 1676322000,
      main: {
        temp: 277.96,
        feels_like: 273.56,
        temp_min: 277.96,
        temp_max: 277.96,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 983,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 35
      },
      wind: {
        speed: 6.63,
        deg: 285,
        gust: 12.04
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-13 21:00:00'
    },
    {
      dt: 1676332800,
      main: {
        temp: 275.37,
        feels_like: 270.08,
        temp_min: 275.37,
        temp_max: 275.37,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 986,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 57
      },
      wind: {
        speed: 7.03,
        deg: 298,
        gust: 13.89
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-14 00:00:00'
    },
    {
      dt: 1676343600,
      main: {
        temp: 274.64,
        feels_like: 269.58,
        temp_min: 274.64,
        temp_max: 274.64,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 989,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 54
      },
      wind: {
        speed: 6.02,
        deg: 293,
        gust: 12.54
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-14 03:00:00'
    },
    {
      dt: 1676354400,
      main: {
        temp: 273.95,
        feels_like: 269.27,
        temp_min: 273.95,
        temp_max: 273.95,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 992,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 31
      },
      wind: {
        speed: 4.93,
        deg: 288,
        gust: 10.96
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-14 06:00:00'
    },
    {
      dt: 1676365200,
      main: {
        temp: 273.35,
        feels_like: 269.77,
        temp_min: 273.35,
        temp_max: 273.35,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 994,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 3.14,
        deg: 272,
        gust: 7.45
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-14 09:00:00'
    },
    {
      dt: 1676376000,
      main: {
        temp: 273.15,
        feels_like: 270.78,
        temp_min: 273.15,
        temp_max: 273.15,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 997,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 8
      },
      wind: {
        speed: 1.93,
        deg: 256,
        gust: 4.22
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-14 12:00:00'
    },
    {
      dt: 1676386800,
      main: {
        temp: 274.96,
        feels_like: 272,
        temp_min: 274.96,
        temp_max: 274.96,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 998,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 11
      },
      wind: {
        speed: 2.79,
        deg: 211,
        gust: 4.28
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-14 15:00:00'
    },
    {
      dt: 1676397600,
      main: {
        temp: 277.38,
        feels_like: 274.63,
        temp_min: 277.38,
        temp_max: 277.38,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 3.13,
        deg: 191,
        gust: 4.92
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-14 18:00:00'
    },
    {
      dt: 1676408400,
      main: {
        temp: 278.83,
        feels_like: 276,
        temp_min: 278.83,
        temp_max: 278.83,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 998,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 38
      },
      wind: {
        speed: 3.73,
        deg: 181,
        gust: 6.77
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-14 21:00:00'
    },
    {
      dt: 1676419200,
      main: {
        temp: 277.13,
        feels_like: 274.41,
        temp_min: 277.13,
        temp_max: 277.13,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 996,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 67
      },
      wind: {
        speed: 3.03,
        deg: 134,
        gust: 7.05
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-15 00:00:00'
    },
    {
      dt: 1676430000,
      main: {
        temp: 276.45,
        feels_like: 273.94,
        temp_min: 276.45,
        temp_max: 276.45,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 994,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.61,
        deg: 110,
        gust: 5.63
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-15 03:00:00'
    },
    {
      dt: 1676440800,
      main: {
        temp: 276.77,
        feels_like: 274.25,
        temp_min: 276.77,
        temp_max: 276.77,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 991,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.69,
        deg: 114,
        gust: 6.85
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-15 06:00:00'
    },
    {
      dt: 1676451600,
      main: {
        temp: 277.79,
        feels_like: 274.69,
        temp_min: 277.79,
        temp_max: 277.79,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 989,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.79,
        deg: 168,
        gust: 12.06
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-15 09:00:00'
    },
    {
      dt: 1676462400,
      main: {
        temp: 278.74,
        feels_like: 275.06,
        temp_min: 278.74,
        temp_max: 278.74,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 986,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 93
      },
      wind: {
        speed: 5.37,
        deg: 191,
        gust: 16.71
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.18
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-15 12:00:00'
    },
    {
      dt: 1676473200,
      main: {
        temp: 281.73,
        feels_like: 277.73,
        temp_min: 281.73,
        temp_max: 281.73,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 984,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 8.96,
        deg: 202,
        gust: 21.35
      },
      visibility: 10000,
      pop: 0.73,
      rain: {
        '3h': 0.59
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-15 15:00:00'
    },
    {
      dt: 1676484000,
      main: {
        temp: 284.54,
        feels_like: 283.69,
        temp_min: 284.54,
        temp_max: 284.54,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 983,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 96
      },
      wind: {
        speed: 7.64,
        deg: 224,
        gust: 17.89
      },
      visibility: 10000,
      pop: 0.96,
      rain: {
        '3h': 0.81
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-15 18:00:00'
    },
    {
      dt: 1676494800,
      main: {
        temp: 285.92,
        feels_like: 284.79,
        temp_min: 285.92,
        temp_max: 285.92,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 81
      },
      wind: {
        speed: 8.84,
        deg: 237,
        gust: 18.57
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-15 21:00:00'
    },
    {
      dt: 1676505600,
      main: {
        temp: 283.77,
        feels_like: 282.56,
        temp_min: 283.77,
        temp_max: 283.77,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 987,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 58
      },
      wind: {
        speed: 7.21,
        deg: 249,
        gust: 17.61
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-16 00:00:00'
    },
    {
      dt: 1676516400,
      main: {
        temp: 281.37,
        feels_like: 278.52,
        temp_min: 281.37,
        temp_max: 281.37,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 989,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 4.98,
        deg: 257,
        gust: 13.66
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-16 03:00:00'
    },
    {
      dt: 1676527200,
      main: {
        temp: 279.47,
        feels_like: 276.66,
        temp_min: 279.47,
        temp_max: 279.47,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 990,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 3.94,
        deg: 269,
        gust: 11.13
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-16 06:00:00'
    },
    {
      dt: 1676538000,
      main: {
        temp: 277.58,
        feels_like: 276.1,
        temp_min: 277.58,
        temp_max: 277.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 991,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 62
      },
      wind: {
        speed: 1.78,
        deg: 261,
        gust: 2.77
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-16 09:00:00'
    },
    {
      dt: 1676548800,
      main: {
        temp: 276.98,
        feels_like: 276.98,
        temp_min: 276.98,
        temp_max: 276.98,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 991,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 81
      },
      wind: {
        speed: 0.73,
        deg: 328,
        gust: 0.95
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-16 12:00:00'
    },
    {
      dt: 1676559600,
      main: {
        temp: 277.59,
        feels_like: 275.18,
        temp_min: 277.59,
        temp_max: 277.59,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 988,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.75,
        deg: 75,
        gust: 4.07
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-16 15:00:00'
    },
    {
      dt: 1676570400,
      main: {
        temp: 277.75,
        feels_like: 274,
        temp_min: 277.75,
        temp_max: 277.75,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.98,
        deg: 99,
        gust: 11.4
      },
      visibility: 10000,
      pop: 0.41,
      rain: {
        '3h': 0.26
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-16 18:00:00'
    },
    {
      dt: 1676581200,
      main: {
        temp: 278.46,
        feels_like: 276.26,
        temp_min: 278.46,
        temp_max: 278.46,
        pressure: 998,
        sea_level: 998,
        grnd_level: 978,
        humidity: 99,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.69,
        deg: 111,
        gust: 6.54
      },
      visibility: 584,
      pop: 0.4,
      rain: {
        '3h': 0.54
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-16 21:00:00'
    },
    {
      dt: 1676592000,
      main: {
        temp: 284.62,
        feels_like: 284.17,
        temp_min: 284.62,
        temp_max: 284.62,
        pressure: 995,
        sea_level: 995,
        grnd_level: 976,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 7.76,
        deg: 229,
        gust: 17.16
      },
      visibility: 10000,
      pop: 0.91,
      rain: {
        '3h': 0.56
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-17 00:00:00'
    },
    {
      dt: 1676602800,
      main: {
        temp: 275.81,
        feels_like: 270.2,
        temp_min: 275.81,
        temp_max: 275.81,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 982,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 86
      },
      wind: {
        speed: 8.23,
        deg: 292,
        gust: 16.05
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-17 03:00:00'
    },
    {
      dt: 1676613600,
      main: {
        temp: 271.04,
        feels_like: 264.83,
        temp_min: 271.04,
        temp_max: 271.04,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 56,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 55
      },
      wind: {
        speed: 6.37,
        deg: 297,
        gust: 12.08
      },
      visibility: 10000,
      pop: 0.22,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-17 06:00:00'
    },
    {
      dt: 1676624400,
      main: {
        temp: 268.97,
        feels_like: 262.01,
        temp_min: 268.97,
        temp_max: 268.97,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 990,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 6.71,
        deg: 310,
        gust: 9.61
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-17 09:00:00'
    },
    {
      dt: 1676635200,
      main: {
        temp: 267.34,
        feels_like: 260.34,
        temp_min: 267.34,
        temp_max: 267.34,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 994,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 6.71,
        deg: 318,
        gust: 9.08
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-17 12:00:00'
    },
    {
      dt: 1676646000,
      main: {
        temp: 266.1,
        feels_like: 259.1,
        temp_min: 266.1,
        temp_max: 266.1,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 50,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 6.72,
        deg: 334,
        gust: 8.98
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-17 15:00:00'
    },
    {
      dt: 1676656800,
      main: {
        temp: 266.86,
        feels_like: 259.86,
        temp_min: 266.86,
        temp_max: 266.86,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 998,
        humidity: 44,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 6.64,
        deg: 328,
        gust: 8.58
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-17 18:00:00'
    },
    {
      dt: 1676667600,
      main: {
        temp: 266.95,
        feels_like: 259.95,
        temp_min: 266.95,
        temp_max: 266.95,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1000,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 6.59,
        deg: 326,
        gust: 8.62
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-02-17 21:00:00'
    },
    {
      dt: 1676678400,
      main: {
        temp: 265.61,
        feels_like: 258.61,
        temp_min: 265.61,
        temp_max: 265.61,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1003,
        humidity: 44,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 6.24,
        deg: 323,
        gust: 8.54
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-02-18 00:00:00'
    }
  ],
  city: {
    id: 6167865,
    name: 'Toronto',
    coord: {
      lat: 43.7001,
      lon: -79.4163
    },
    country: 'CA',
    population: 4612191,
    timezone: -18000,
    sunrise: 1676204466,
    sunset: 1676241773
  }
}

const FetchWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    return { data: response.data, error: '' }
  } catch (error) {
    return { data: {}, error: error.message }
  }
}

const FetchDailyWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${DAILY_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    return { data: response.data, error: '' }
  } catch (error) {
    return { data: {}, error: error.message }
  }
}

export const FetchData = async (lat, lon) => {
  let response = await FetchWeather(lat, lon)
  if (response.error !== '') console.log(response.error)
  return response.data
}

export const FetchDailyData = async (lat, lon) => {
  let responseDaily = await FetchDailyWeather(lat, lon)
  if (responseDaily.error !== '') console.log(responseDaily.error)
  return responseDaily.data
}

// console.log(FetchWeather('Toronto', 'CA'))
