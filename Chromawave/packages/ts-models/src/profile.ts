export interface Profile {
  userid: string;
  name: string;
  email: string;
  password: string;
  songs: string[];
  color?: string;
  avatar?: string;
}