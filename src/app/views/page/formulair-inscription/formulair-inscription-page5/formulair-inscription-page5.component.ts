import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulair-inscription-page5',
  templateUrl: './formulair-inscription-page5.component.html',
  styleUrls: ['./formulair-inscription-page5.component.scss']
})
export class FormulairInscriptionPage5Component implements OnInit {
  formulairInscription = this.fb.group({
    situationFamiliale: [],
    rib: [],
    releveBancaire: [],
    numRib: [],
    dejaCinPere: [],
    numCinPere: [],
    nomPere: [],
    prenomPere: [],
    dateNaissancePere: [],
    viePere: [],
    dejaCinMere: [],
    numCinMere: [],
    nomMere: [],
    prenomMere: [],
    dateNaissanceMere: [],
    mereVie: [],
    dejaConverture: [],
    nomConverture: [],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
