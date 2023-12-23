import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemitteeInterface } from 'projects/panel/src/app/panel/panel.interface';
import { PanelService } from 'projects/panel/src/app/panel/panel.service';
import { CityInterface } from 'projects/suadmin/src/app/panel/params/city/city.interface';
import { CountryInterface } from 'projects/suadmin/src/app/panel/params/country/country.interface';
import { DepartmentInterface } from 'projects/suadmin/src/app/panel/params/department/department.interface';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public countries$: Observable<CountryInterface[]> = this.panelSrv.getCountries();
  public departments$: Observable<DepartmentInterface[]> = this.panelSrv.getDepartments();
  public cities$: Observable<CityInterface[]> = this.panelSrv.getCities();
  
  public createForm = new FormGroup({
    country_id: new FormControl<CountryInterface["id"]>(231),
    department_id: new FormControl<DepartmentInterface["id"]>(24),
    city_id: new FormControl<CityInterface["id"]>(0, { validators: Validators.required }),
    nombres: new FormControl('', { validators: Validators.required }),
    apellidos: new FormControl('', { validators: Validators.required }),
    direccion: new FormControl('', { validators: Validators.required }),
    telefono: new FormControl('', { validators: Validators.required }),
    correo: new FormControl('', { validators: Validators.required }),
  });

  constructor(private panelSrv: PanelService, private router: Router) {}
  async onSubmit(): Promise<void> {
    //let city: CityInterface = ;city
    let city_id = this.createForm.controls.city_id.value ? this.createForm.controls.city_id.value: 0;
    let remittee: RemitteeInterface = await lastValueFrom(this.panelSrv.addRemittee({
      id: 0,
      city: {
        id: city_id,
        name: null,
      },
      nombres: this.createForm.controls.nombres.value? this.createForm.controls.nombres.value: "",
      apellidos: this.createForm.controls.apellidos.value? this.createForm.controls.apellidos.value: "",
      direccion: this.createForm.controls.direccion.value? this.createForm.controls.direccion.value: "",
      telefono: this.createForm.controls.telefono.value? this.createForm.controls.telefono.value: "",
      correo: this.createForm.controls.correo.value? this.createForm.controls.correo.value: "",
    }));
    alert('Se ha registrado consignatario correctamente')
    this.router.navigate(['/login']);
  }
}
