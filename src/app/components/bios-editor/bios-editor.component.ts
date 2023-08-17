import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bios-editor',
  templateUrl: './bios-editor.component.html',
  styleUrls: ['./bios-editor.component.css']
})
export class BiosEditorComponent implements OnInit {

  @Input() editingBios! : boolean;

  editedBios : string = "";
  descricao : string = "Descricao inicial";

  editBios! : string;
  btnEdit! : string;
  btnSave! : string;
  textEdit! : string;
  descriptBios! : string;

  constructor() { }

  handleClickEdit() : void {
      this.editingBios = true;
      this.editedBios = this.descricao;
  }

  handleClickSave() : void {
      this.descricao = this.editedBios;
      this.editingBios = false;
  }

  ngOnInit() : void {
    this.editBios = "edit-bios";
    this.btnEdit = "btn-edit";
    this.btnSave = "btn-save";
    this.textEdit = "text-editar";
    this.descriptBios = "desc-bios";
  }
}
