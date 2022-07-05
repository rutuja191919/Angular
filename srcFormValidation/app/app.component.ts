import { Component, Output, Input} from '@angular/core';

import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fbobj : FormBuilder){}

  MarvellousForm = this.fbobj.group(
    {
      // Add Multiple validations
      firstname :['', [Validators.required, Validators.pattern("[a-zA-Z]*")] ],
      lastname : ['',Validators.required],
      emailid :['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")] ],
      phone :['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)] ],
      city : ['',[Validators.required,  Validators.pattern("^[A-Za-z]{4,}$")] ],
      state : ['',Validators.required],
      zip : ['',[Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(5), Validators.maxLength(5)] ],
      comment : ['',[Validators.required, Validators.minLength(30)] ]
    })

    get Email()
    {
      return this.MarvellousForm.get('emailid');
    }

    get Phone()
    {
      return this.MarvellousForm.get('phone');
    }

    get FirstName()
    {
      return this.MarvellousForm.get('firstname');
    }

    get LastName()
    {
      return this.MarvellousForm.get('lastname');
    }

    get City()
    {
      return this.MarvellousForm.get('city');
    }
    get State()
    {
      return this.MarvellousForm.get('state');
    }
    get ZipCode()
    {
      return this.MarvellousForm.get('zip');
    }

    get Comment()
    {
      return this.MarvellousForm.get('comment');
    }
}
