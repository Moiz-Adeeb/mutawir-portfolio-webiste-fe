import { Component, inject } from '@angular/core';
import { AppTextFieldComponent } from "../../../../shared/app-text-field/components/app-text-field/app-text-field.component";
import { AppTextAreaFieldComponent } from "../../../../shared/app-text-area-field/components/app-text-area-field/app-text-area-field.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../../../customValidator/custom-validator';
import { AlertService } from '../../../../services/alert.service';
import { QRCodeComponent } from 'angularx-qrcode';
import { SafeUrl } from '@angular/platform-browser';
interface link{
  title: string
  icon: string
  route: string
}
@Component({
  selector: 'app-contact-page',
  imports: [CommonModule, AppTextFieldComponent, AppTextAreaFieldComponent, AngularSvgIconModule, QRCodeComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  standalone: true,
})
export class ContactPageComponent {
  alertService = inject(AlertService);

  navigateToExternalUrl(url: string): void {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab) {
      newTab.focus();
    }
  }

  links: link[] = [
    {
      title: 'Linkedin',
      icon: '/assets/svg/linkedin.svg',
      route: 'https://www.linkedin.com/in/mutawir/',
    },
    {
      title: 'Instagram',
      icon: '/assets/svg/instagram.svg',
      route: 'https://www.instagram.com/mutawir.developer/',
    },
    {
      title: 'Twitter',
      icon: '/assets/svg/twitter.svg',
      route: 'https://x.com/MutawirOfficial',
    },
    {
      title: 'Fiverr',
      icon: '/assets/svg/fiverr.svg',
      route: 'https://www.fiverr.com/mutawir_dev',
    },
    {
      title: 'Upwork',
      icon: '/assets/svg/upwork.svg',
      route: 'https://www.upwork.com/freelancers/~01ede5dd9b00f01b77',
    },
  ];

  nameControl = new FormControl('', [CustomValidator.required(), Validators.maxLength(50)]);
  emailControl = new FormControl('', [CustomValidator.required(), Validators.email]);
  messageControl = new FormControl('', [CustomValidator.required()]);

   contactFormGroup: FormGroup = new FormGroup({
    name: this.nameControl,
    email: this.emailControl,
    message: this.messageControl,
  });

  async submit() {
    this.contactFormGroup.markAllAsTouched();
    if (this.contactFormGroup.invalid) return;
    this.alertService.startLoadingMessage('Sending Message');
    const rawData = this.contactFormGroup.value;

    const payload = {
      ...rawData,
      access_key: '0f752b71-7548-4622-91dc-c22fa8795a63',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        this.alertService.stopLoadingMessage();
        this.alertService.showSuccessMessage('Mesage Sent');
        this.contactFormGroup.reset();
      }
    } catch (err) {
      console.error('Submission Error:', err);
    }
  }

  phoneNumber = '923212567154';

  welcomeMessage = 'Hi! I am interested in your development services.';

  whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.welcomeMessage)}`;

  qrCodeDownloadLink: SafeUrl = '';

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
