import { Component } from '@angular/core';

@Component({
  selector: 're-radio-group-demo',
  templateUrl: './radio-group-demo.component.html'
})
export class RadioGroupDemoComponent {

  sexOptions = ['male', 'female'];
  sex = 'male';

  seasonOptions = [
    { label: 'Spring', value: 'SPRING' },
    { label: 'Summer', value: 'SUMMER' },
    { label: 'Autumn', value: 'AUTUMN' },
    { label: 'Winter', value: 'WINTER' }
  ];

  season = this.seasonOptions[1];
  seasonValue = 'WINTER';
  valueParser = (item) => item.value;
}

