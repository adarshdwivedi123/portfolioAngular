import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public graph = {
    data: [

      {
    
        labels: ['C++', 'java', 'C'],
        domain: { column: 1 },
        name: 'Core Programming',
        hoverinfo: 'label+percent+name',
        hole: .6,
        type: 'pie'
      },
    ],
    layout: {
      title: 'Core Programming',
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text:'Programing',
          x: 0.5,
          y: 0.5
        },

      ],
      height: 400,
      width: 410,
      showlegend: true,
     
      legend: { x: 1.3, y: 0.5 }

    }

  }
  public graph2 = {
    data2: [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        // text:'Develop'

      },
      {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
      }
    ],
    layout: { width: 410, height: 400, title: 'Developement VS DSA', type: 'scatter' }

  }
  public graph3 = {
    data3: [

      {
        // values: [25, 50, 25,],
        labels: ['Html', 'Css', 'JavaScript', 'Nodejs'],
        domain: { column: 1 },
        // name: 'Core Programming',
        hoverinfo: 'label+percent+name',
        type: 'pie'
      },
    ],
    layout: {
      title: 'Frontend Development',
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: '',
          x: 0.5,
          y: 0.5
        },

      ],
      height: 400,
      width: 410,
      showlegend: true,
      legend: { x: 1.3, y: 0.5 }
    }
  }

}


