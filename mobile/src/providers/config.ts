import { Injectable } from '@angular/core';

const config_Access_key = "@eita-passei:config";

interface ConfigParams {
  name: string,
  ensino: string,
  avatar: string,
  materias: any[],
  install: boolean,
};

@Injectable()
export class ConfigProvider {

  private config: ConfigParams = {
    name: "",
    avatar: "",
    ensino: "",
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
