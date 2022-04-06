export class Mission {
  details: string;
  flight_number: number;
  launch_year: string;
  mission_name: string;
  links: Links;

  constructor(launchRes: any) {
    this.flight_number = launchRes.flight_number;
    this.mission_name = launchRes.mission_name;
    this.launch_year = launchRes.launch_year;
    this.details = launchRes.details;
    this.links = launchRes.links.mission_patch_small;
    this.links = launchRes.links.mission_patch;
  }
}
export class Links {
  mission_patch_small: any;
  mission_patch: any;
}
