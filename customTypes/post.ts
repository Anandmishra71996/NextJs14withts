export interface Post {
  prompt: string;
  tag: string;
  creator: Profile;
  _id: string;
}
export interface Profile {
  image: string;
  username: string;
  email: string;
  _id: string;
}
