export interface Breed {
  /**
   * Country code of breed
   */
  country_code: string;
  /**
   * Description about breed
   */
  description: string;
  /**
   * Url of image
   */
  image_url: string;
  /**
   * Life span
   */
  life_span: string;
  /**
   * Name of breed
   */
  name: string;
  /**
   * Origin of breed
   */
  origin: string;
  /**
   * Reference image id of breed
   */
  reference_image_id: string;
  /**
   * Temperament of breed
   */
  temperament: string;
  /**
   * Url on wikipedia
   */
  wikipedia_url: string;
}

export interface BreedName {
  /**
   * Name of breed
   */
  name: string;
}
