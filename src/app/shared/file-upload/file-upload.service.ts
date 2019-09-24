import { Injectable } from '@angular/core';
 
@Injectable()
export class FileUploadService {
    

    add(file: File, fcp: string, type: string) {
        return this.readFile(file)
            .then((arr) => this.upload(file, arr, fcp, type));
    }
    //file upload -- comment out while in prod..

    upload(file: File, fileArray: Uint8Array, fcp: string, type: string) {
       
       
    }

    readFile(file: File): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = () => {
                reject();
            }
            reader.onload = () => {
                resolve(new Uint8Array(reader.result as ArrayBuffer));
            }
            reader.readAsArrayBuffer(file);
        });
    }
}