import { Video } from './video.interface';

/**
 * Season 인터페이스
 */
export interface Season {
  id: string;
  season_no: number;
  start_date: string;
  end_date?: string;
  voteLimit: number;
  stage: any;
  userSeasons: any[];
  videos: Video[];
}
