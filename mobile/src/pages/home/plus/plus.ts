import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ConfigProvider } from '../../../providers/config';

@IonicPage()
@Component({
  selector: 'page-plus',
  templateUrl: 'plus.html',
  providers: [
    ConfigProvider,
  ]
}) 
export class PlusPage {
  
  public teacher: string = '';
  public matter: string = '';
  public overallAverage: number;

  public grade1: number;
  public grade2: number;
  public grade3: number;
  public grade4: number;
  
  public weight1: number = 1;
  public weight2: number = 1;
  public weight3: number = 1;
  public weight4: number = 1;

  public isWeight1: boolean = false;
  public isWeight2: boolean = false;
  public isWeight3: boolean = false;
  public isWeight4: boolean = false;

  public isGrade: boolean = true;
  public isGrade3: boolean = false;
  public isGrade4: boolean = false;

  constructor (
    private navCtrl: NavController,
    private configCtrl: ConfigProvider
  ) { }

  public systemWeight(index: number, state: boolean): void {
    switch (index) {
      case 1: 
        this.isWeight1 = state;
        break;
      case 2:
        this.isWeight2 = state;
        break;
      case 3:
        this.isWeight3 = state;
        break;
      case 4:
        this.isWeight4 = state;
        break;
      default: 
        break;
    }
  }

  public systemGrade(index: number, state: boolean): void {
    switch (index) {
      case 3:  
        if (this.isGrade4 === false) {
          this.isGrade = true;
        } else { 
          if (this.isGrade === false) {
            this.isGrade = true; 
          } else {
            this.isGrade = false;
          }
        }
        this.isGrade3 = state;
        break;
      case 4:
        if (state === false) {
          this.isGrade = true;
        } else {
          this.isGrade = false;
        }
        this.isGrade4 = state;
        break;
      default:  
        break;
    }
  } 
 
  public systemSaveSubject(): void {
    const data = {
      teacher: this.teacher,
      matter: this.matter,
      overallAverage: this.overallAverage,
      grades: this.systemGetArrayGrades() 
    }
     
    const response = this.configCtrl.getConfig();

    response.materias.push(data);

    const { username, avatar, install } = response;

    this.configCtrl.setConfig(
      username,
      avatar, 
      response.materias,
      install
    );

    this.navCtrl.pop();
  }

  private systemGetArrayGrades(): Array<any> {
    var grades = [];

    if (this.isGrade3) {
      if (this.isGrade4) {
        grades = [
          {
            id: 1,
            grade: this.grade1,
            weight: this.weight1
          },
          {
            id: 2,
            grade: this.grade2,
            weight: this.weight2
          },
          {
            id: 3,
            grade: this.grade3,
            weight: this.weight3
          },
          {
            id: 4,
            grade: this.grade4,
            weight: this.weight4
          }
        ]
      } else {
        grades = [
          {
            id: 1,
            grade: this.grade1,
            weight: this.weight1
          },
          {
            id: 2,
            grade: this.grade2,
            weight: this.weight2
          },
          {
            id: 3,
            grade: this.grade3,
            weight: this.weight3
          }
        ]
      }
    } else {
      grades = [
        {
          id: 1,
          grade: this.grade1,
          weight: this.weight1
        },
        {
          id: 2,
          grade: this.grade2,
          weight: this.weight2
        }
      ]
    }

    return grades;
  }
}
