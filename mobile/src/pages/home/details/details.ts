import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from '../../../providers/config';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [
    ConfigProvider
  ]
})
export class DetailsPage {

  public subject: any;

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public configCtrl: ConfigProvider,
  ) { 
    this.subject = navParams.get('item');
  }

  ionViewWillEnter(){
    this.getFinalGrade();
  }

  public alert() {
    alert("Em breve...");
  }
 
  public getGrades(grade: any, weight: any): number {
    return Number.parseFloat(grade) * Number.parseInt(weight);
  }

  public getFinalGrade(): number {
    var grade = 0;
    this.subject.grades.map((item: any)=> {
      grade = grade + (Number.parseFloat(item.grade) * item.weight);
    });
    return grade;
  }
 
  public getFinalWeight(): number { 
    var weight = 0;
    this.subject.grades.map((item: any) => {
      weight = weight + Number.parseFloat(item.weight); 
    });
    return weight;
  }
  
  public getFinal(): number {
    return this.getFinalGrade() / this.getFinalWeight();
  }

  public getState(): string {
    return this.getFinal() >= this.subject.overallAverage ? 'Aprovado' : 'Reprovado';
  }

  public handleRemoveSubject(): void {
    const response = this.configCtrl.getConfig();
 
    const removed = response.materias.filter(item => {
      return item.matter !== this.subject.matter;
    });

    const { username, avatar, install } = response;

    this.configCtrl.setConfig(
      username,
      avatar,
      removed,
      install
    );

    this.navCtrl.pop();
  }

}
