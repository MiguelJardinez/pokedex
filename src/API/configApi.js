import axios from 'axios';

export const POKEAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 1000,
});
