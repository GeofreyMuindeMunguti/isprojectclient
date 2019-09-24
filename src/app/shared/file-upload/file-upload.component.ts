import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
 

import { FileUploadService } from './file-upload.service';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html'
})

export class FileUploadComponent {
  
    @Input() form: FormGroup;
     model:any;
    modelType: string;
    fcp: string;
    file: File;
    imgUrl: any;
    uploadAttempt: boolean;
    dimensionsValid: boolean;
    validWidth: number;
    validHeight: number;

    constructor(
        private route: ActivatedRoute,
        private service: FileUploadService
    ) {
        this.modelType = this.route.snapshot.parent.routeConfig.path.split('/').pop();
        this.validWidth = this.modelType == 'meals' ? 650 : 200;
        this.validHeight = this.modelType == 'meals' ? 300 : 200;
    }

    async onChange(event: any) {

        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
    
            const reader = new FileReader();
            reader.onload = e => this.imgUrl = reader.result;
    
            reader.readAsDataURL(file);

        }

        this.file = event.target.files[0];
        this.uploadAttempt = true;
        this.dimensionsValid = await this.checkDimensions();

    }

    uploadFile() {
        // this.service.add(this.file, this.model.fcp, this.modelType)
        //     .then((url) => {
        //         console.log('image',url);
        //         this.model.img_url = url;
        //         this.form.controls['img_url'].setValue(url);
        //     });
    }

    unsetFile() {
      //  this.model.img_url = '';
        this.form.controls['img_url'].setValue('');
    }

    fileValid(): boolean {
        if (!this.file) return true;

        let maxSize = 1000000;
        let validTypes = ['image/png', 'image/jpg', 'image/jpeg'];

        return this.file.size > maxSize ? true
            : !validTypes.includes(this.file.type) ? true
            : !this.dimensionsValid ? true
            : false;
    }

    checkDimensions(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.service.readFile(this.file).then((file) => {
                let blob = new Blob([file], {'type': 'image'});
                let url = URL.createObjectURL(blob);
        
                let image = new Image();
                image.onload = () => {
                    image.width == this.validWidth && image.height == this.validHeight ? resolve(true) : resolve(false);
                }
                image.src = url;
            });
        });
    }
}