import { axiosInstance } from '../utils/axios-instance';
import { Band, BandFinalInfo } from '../interfaces/band-info.interface';
import { Video } from '../interfaces/video.interface';

export const getVideoDetailInfo = async (
  id: string,
): Promise<Video & Omit<Band, 'videos'>> => {
  try {
    const response = await axiosInstance(`/videos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
