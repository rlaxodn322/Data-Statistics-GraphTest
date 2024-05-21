// (can data RackNumber filter 후)
import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function graphget(startTime: string, endTime: string, rackNumber: string) {
  try {
    const response = await axios.get(
      `/graphtest2/getdata?startTime=${startTime}&endTime=${endTime}&rackNumber=${rackNumber}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
