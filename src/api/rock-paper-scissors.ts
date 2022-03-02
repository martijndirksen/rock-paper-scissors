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

const headers = { Accept: 'application/json' };

export async function getPlayers(): Promise<IApiPlayer[]> {
  const response = await fetch(baseUrl + '/GetPlayers', {
    method: 'GET',
    headers,
  });

  return await response.json();
}
