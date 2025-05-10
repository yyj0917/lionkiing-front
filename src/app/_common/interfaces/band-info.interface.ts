import { Season } from './season.interface';
import { Video } from './video.interface';

export interface Band {
  id: string;
  name: string;
  image: string;
  description: string;
  videos: Video[];
}
export interface BandFinalInfo {
  id: string;
  url: string;
  song_description: string;
  votes: any[];
  season: Season;
  band: Band;
}
