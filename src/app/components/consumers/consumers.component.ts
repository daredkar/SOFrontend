import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  open(content, event: any) {
    //const options: NgbModalOptions = { size: 'lg'};
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    //this.modalOption.size = 'lg';
    }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

  addConsumer() {
    
  }
}
