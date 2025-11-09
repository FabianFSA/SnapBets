export class Conference {
  id: string;
  name: string;
  logo: URL;

  constructor(name: string, logo: URL) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.logo = logo;
  }
}
