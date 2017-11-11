import {Component, OnInit} from '@angular/core';
import {RespondentModel} from '../../models/respondent.model';
import {RespondentService} from '../../../shared/services/respondent.service';

@Component({
  selector: 'pt-all-respondents-list',
  templateUrl: './all-respondents-list.component.html',
  styleUrls: ['./all-respondents-list.component.scss']
})
export class AllRespondentsListComponent implements OnInit {

  public respondentsList: RespondentModel[];

  constructor(private respondentService: RespondentService) {
  }

  ngOnInit() {
    this.respondentService.getRespondents().subscribe(result => this.respondentsList = result);
  }

}
