export enum Shape {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
}

export interface IApiPlayer {
  name: string;
  score: number;
}

export interface IApiPlay {
  playerName: string;
  shape: Shape;
}

export interface IApiPlayResponse {
  isWinner: boolean;
  playerShape: Shape;
  otherShape: Shape;
  message: string;
}

const baseUrl =
  'https://apim-netivity-trendwatch-prod-euwe.azure-api.net/rock-paper-scissors';

async function doFetch<T>(
  path: string,
  method: 'GET' | 'POST',
  data?: unknown
): Promise<T> {
  return await fetch(baseUrl + path, {
    method,
    headers: { Accept: 'application/json' },
    body: data ? JSON.stringify(data) : null,
  }).then((x) => x.json());
}

export async function getPlayers(): Promise<IApiPlayer[]> {
  return await doFetch('/GetPlayers', 'GET');
}

export async function play(data: IApiPlay): Promise<IApiPlayResponse> {
  return await doFetch('/Play', 'POST', data);
}
