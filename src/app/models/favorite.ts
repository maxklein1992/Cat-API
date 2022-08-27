export interface Favorite {
  /**
   * Date when it is created
   */
  created_at: string;
  /**
   * Id
   */
  id: string;
  /**
   * Sub id
   */
  image: FavoriteImage;
  /**
   * Sub id
   */
  sub_id: string;
  /**
   * User id
   */
  user_id: string;
}

export interface FavoriteImage {
  /**
   * Image id
   */
  id: string;
  /**
   * Image url
   */
  url: string;
}
