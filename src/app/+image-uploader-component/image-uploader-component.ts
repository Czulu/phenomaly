import { Component } from '@angular/core';

@Component({
  selector: 'image-uploader',
  styleUrls: ['./image-uploader-component.scss'],
  templateUrl: './image-uploader-component.html',
})
export class ImageUploaderComponent {
  private fileName: string;
  private fileSize: number;
  private fileType: string;
  private url: string = '';
  private width: number = null;
  private height: number = null;

  private onPreviewLoaded($event) {
    this.width = $event.path[0].width;
    this.height = $event.path[0].height;
  }

  private onPreviewError($event) {
    this.url = '';
    this.height = null;
    this.width = null;
  }

  private inputListener($event): void {
    var file: File = $event.target.files[0];
    var reader  = new FileReader();

    this.fileName = file.name;
    this.fileSize = file.size;
    this.fileType = file.type;

    reader.onload = (e) => {
      this.url = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
