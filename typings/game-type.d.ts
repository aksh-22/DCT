export type game_image_slug =
  | 'single_ankda'
  | 'single_ank_dp_panel'
  | 'half_jack'
  | 'red_family_jodi'
  | 'family_jodi'
  | 'single_ank_sp_panel'
  | 'red_jodi'
  | 'cycle_panel'
  | 'jodi'
  | 's_p_panel'
  | 'family_panel'
  | 't_p_panel'
  | 'd_p_panel'
  | 'full_jack';

export interface gameDataType {
  id: string;
  name: string;
  image: string;
  slug: game_image_slug;
}
