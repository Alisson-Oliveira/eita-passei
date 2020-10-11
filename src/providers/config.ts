import { Injectable } from '@angular/core';

let config_Access_key = "Config_User";

@Injectable()
export class ConfigProvider {

  private config = {
    name: "",
    avatar: "",
    materias: [],
    install: false,
  }

  constructor () { }

  public getConfig(): any {
    return localStorage.getItem(config_Access_key);
  }

  public setConfig(name: string, avatar: string, materias: any, install: boolean): void {

    if (name) {
      this.config.name = name;
    }

    if (avatar) {
      this.config.avatar = avatar;
    }

    if (materias) {
      this.config.materias = materias;
    }

    if (install == true || install == false) {
      this.config.install = install;
    }
    
    localStorage.setItem(config_Access_key, JSON.stringify(this.config));
  }
}
