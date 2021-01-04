import { Injectable } from '@angular/core';

const config_Access_key = "@eita-passei:config";

interface ConfigParams {
  username?: string,
  avatar?: string,
  materias?: any[],
  install?: boolean,
};

@Injectable()
export class ConfigProvider {

  private config: ConfigParams = {
    username: "",
    avatar: "",
    materias: [], 
    install: false,
  }

  constructor () { } 

  public getConfig(): ConfigParams {
    return JSON.parse(localStorage.getItem(config_Access_key)); 
  }

  public setConfig(username: string, avatar: string, materias: any, install: boolean): void {

    if (username) {
      this.config.username = username;
    } 

    if (avatar) {
      this.config.avatar = avatar;
    }

    if (materias) {
      this.config.materias = materias;
    }

    if (install === true || install === false) {
      this.config.install = install;
    }
    
    localStorage.setItem(config_Access_key, JSON.stringify(this.config));
  }
}
