import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { LoginInfo } from '../../../object/login-info';

@Component({
  selector: 'app-consumer-addition-form',
  templateUrl: './consumer-addition-form.component.html',
  styleUrls: ['./consumer-addition-form.component.css']
})
export class ConsumerAdditionFormComponent implements OnInit {
public jiraAuth: LoginInfo;
  AddProductForm: FormGroup;
  username: string;
  password: string;
  user: string;
  //form values
  prod_name: string;
  prod_quantity: string;
  prod_category: string;
  prod_subcategory: string;
  prod_manufacture: string;
  prod_manufactureno: string;
  prod_code: string;
  prod_investment: string;
  prod_date: Date;
  prod_color: string;
  prod_status: string;
  //values needed for form to populate
  categories: any[];
  status: any[];
  constructor(private logon: LoginService, private router: Router) {  }

  ngOnInit() {
    this.jiraAuth = {
        username: '',
        password: ''
    };
    this.AddProductForm = new FormGroup({
        prod_name: new FormControl('', Validators.required),
        prod_quantity: new FormControl('', Validators.required),
        prod_category: new FormControl('', Validators.required),
        prod_subcategory: new FormControl('', Validators.required),
        prod_manufacture: new FormControl('', Validators.required),
        prod_manufactureno: new FormControl('', Validators.required),
        prod_code: new FormControl('', Validators.required),
        prod_investment: new FormControl('', Validators.required),
        prod_date: new FormControl('', Validators.required),
        prod_color: new FormControl('', Validators.required),
        prod_status: new FormControl('', Validators.required)
          });
    this.categories = [{id: '01', value: 'Seasonal'}, {id: '02', value: 'Imetation'}, {id: '03', value: 'Other'}];
    this.status = [{id: '0', value: 'Purchased'}, {id: '1', value: 'Active and Selling'}, {id: '2', value: 'In Stock'}, 
                    {id: '3', value: 'Out of Stock'}, {id: '4', value: 'Not Purchased'}];
  }
  redirect() {
    this.router.navigate(['bulkCreate']);
  }
  AddProductCP() {

  }
}
