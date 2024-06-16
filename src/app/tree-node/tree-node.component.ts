import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  additionalName: string | null;
  pseudonym: string | null;
  courtesyTitle: string;
  title: string;
  dateOfBirth: string | null;
  imageSequenceCount: number;
}

export interface King {
  id: number,
  firstName: string,
  lastName: string,
  courtesyTitle: string,
  additionalName: string,
  dateOfBirth: string,
  imageSequenceCount: number,
  pseudonym: string,
  title: string,
  positionStartYear: number,
  positionEndYear: number,
}

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  kings: King[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<King[]>('http://localhost:8080').subscribe(
      response => {
        // Sort the response array by the 'depth' property in ascending order
        // this.kings = response.sort((a, b) => a.depth - b.depth);
        this.kings = response;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
  
}
