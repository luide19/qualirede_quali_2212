import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-setor-handler',
  templateUrl: './setor-handler.component.html',
  styleUrls: ['./setor-handler.component.css']
})
export class SetorHandlerComponent {

  constructor(private fb:FormBuilder) { 
    this.userSetor = this.fb.group({
      setor:  ['', Validators.required],
      bloqueado: this.fb.array([])
    })

  }

  userSetor: FormGroup
  ngOnInit(): void {
  }
}
