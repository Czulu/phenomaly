import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImageUploaderComponent } from './image-uploader-component';
import { FileSizePipe } from '../pipes/filzesize-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('Image uploader component', () => {

  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploaderComponent, FileSizePipe],
      imports: [BrowserModule, FormsModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploaderComponent);
  });

  it('should have an file input', () => {
    const fileInput = fixture.debugElement.query(By.css('input[type="file"]'));
    expect(fileInput.nativeElement).toBeDefined();
  });
  it('should have image preview initially not displayed', () => {
    const imagePreview = fixture.debugElement.query(By.css('img'));
    expect(imagePreview).toBeNull();
  });
});
