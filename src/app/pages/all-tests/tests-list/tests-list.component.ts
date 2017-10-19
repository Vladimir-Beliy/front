import { Component, OnInit } from '@angular/core';
import {Test} from '../../models/test';

@Component({
  selector: 'pt-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class WraperComponent implements OnInit {

    tests: Test[] = [
        new Test('Тест по Git. Начальный уровень', 4, 10),
        new Test('Тест по HTML. Средний уровень', 5, 12),
        new Test('Тест по JS на тему: "Основы. Часть 05', 6, 8),
        new Test('Тест по английскому на тему: "Основы.', 4, 4),
    ];

  constructor() { }

  ngOnInit() {
  }

}
