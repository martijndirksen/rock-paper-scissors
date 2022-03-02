export enum Shape {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
}

export interface IApiPlayer {
  name: string;
  score: number;
}

const baseUrl =
  'https://apim-netivity-trendwatch-prod-euwe.azure-api.net/rock-paper-scissors';

async function doFetch<T>(path: string, method: 'GET' | 'POST'): Promise<T> {
  return await fetch(baseUrl + path, {
    method,
    headers: { Accept: 'application/json' },
  }).then((x) => x.json());
}

export async function getPlayers(): Promise<IApiPlayer[]> {
  return doFetch('/GetPlayers', 'GET');
}
