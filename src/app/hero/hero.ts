export class Hero {
  id: number;
  name: string;

  formatRequest(): any {
    const formData = {
      name: this.name
    };
    return formData;
  }
}
