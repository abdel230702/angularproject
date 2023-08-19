import { LogicalFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-formulai-inscription-page4',
  templateUrl: './formulai-inscription-page4.component.html',
  styleUrls: ['./formulai-inscription-page4.component.scss']
})
export class FormulaiInscriptionPage4Component implements OnInit {
  fourmulairInscriptionForm = this.fb.group({
    nomFr: [],
    prenomFr: [],
    prenomAr: [],
    nomAr: [],
    cin: [],
    sex: [],
    dateNaissance: [],
    villeFR: [],
    villeAr: [],
    pays: [],
    address: [],
    codePostal: [],
    telephone: [],
    email: [],
    moyenTransport: [],
    handicape: [],
    activiteSportive: [],
    anneeBac: [],
    serieBac: [],
    mentionBac: [],
    lyceeBac: [],
    provinceBac: [],
    typeVaccin: [],
    nbDose: [],
    datePremiereDose: [],
    dateDeuxiemeDose: [],
  })
  constructor(private fb: FormBuilder,
    private inscService: InscriptionService) { }

  ngOnInit(): void {
  }

  save() {
    this.inscService.save(this.fourmulairInscriptionForm.value).subscribe(
      resp => {
        window.location.href = 'https://univh2c.isicod.net/user';
      }
    )
  }
}
