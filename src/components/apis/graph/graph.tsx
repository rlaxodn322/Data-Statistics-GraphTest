import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function graphget(startTime: string, endTime: string) {
  try {
    const response = await axios.get(`/graphtest/getdata?startTime=${startTime}&endTime=${endTime}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
