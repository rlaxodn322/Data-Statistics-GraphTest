// (can data RackNumber filter 후)
import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function graphget(startTime: string, endTime: string, rackNumber: string) {
  try {
    const response = await axios.get(
      `/graphtest/getdata?startTime=${startTime}&endTime=${endTime}&rackNumber=${rackNumber}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
export async function graphget2(startTime: string, endTime: string, rackNumber: string, title: string) {
  try {
    const response = await axios.get(
      `/graphtest/getdata?startTime=${startTime}&endTime=${endTime}&rackNumber=${rackNumber}&title=${title}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
export async function graphget1(startTime: string, endTime: string, title: string) {
  try {
    const response = await axios.get(`/graphtest/getdata1?startTime=${startTime}&endTime=${endTime}&title=${title}`);
    return response.data;
  } catch (error) {
    //console.log(error);
    //throw new Error(`Error fetching data: ${error}`);
  }
}
