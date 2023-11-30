import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements AfterViewInit {
  @ViewChild('componentsContainer', { static: true }) componentsContainerRef!: ElementRef;
  searchQuery: string = '';
  darkMode = false;
  backroundImage = "../../../assets/images/abstract-surface-textures-white-concrete-stone-wall.jpg";
  backColor = '#000';

  catComponent: string | undefined;
  dogComponent: string | undefined;
  parrotComponent: string | undefined;


  componentsContainer!: HTMLElement; 
  toggleDarkTheme() {
    if (this.backroundImage === '../../../assets/images/abstract-surface-textures-white-concrete-stone-wall.jpg') {
      console.log('Changing to new background');
      this.backroundImage = '../../../assets/images/smooth-gray-background.jpg';
      this.backColor = '#fff';
    } else {
      console.log('Changing back to the original background');
      this.backroundImage = '../../../assets/images/abstract-surface-textures-white-concrete-stone-wall.jpg';
      this.backColor = '#000';
    }
  }

  searchComponents() {
    console.log('Search Query:', this.searchQuery);
  
    const components = this.componentsContainer?.querySelectorAll('.component');
  
    if (components) {
      components.forEach(component => {
        const titleElement = component.querySelector('h2') as HTMLElement;
        const descriptionElement = component.querySelector('p') as HTMLElement;
  
        const title = titleElement ? titleElement.innerText.toLowerCase() : '';
        const description = descriptionElement ? descriptionElement.innerText.toLowerCase() : '';
  
        if (title.includes(this.searchQuery.toLowerCase())) {
          (component as HTMLElement).style.display = 'flex';
          (component as HTMLElement).style.flexDirection = 'column';
        } else {
          (component as HTMLElement).style.display = 'none';
        }
      });
    }
  
  }
  ngAfterViewInit() {
    this.componentsContainer = this.componentsContainerRef.nativeElement;
    console.log('ngAfterViewInit hook called');
    this.catComponent = `
    <div class="component" id="cat">
   
      <h2 class="component-title">Cat</h2>
      <p class="component-text">
        A small domesticated carnivorous mammal, Felis catus.
        To care for your cat, ensure they have a balanced diet, access to fresh water, and regular veterinary check-ups. 
        Keep the litter box clean and provide enrichment through toys and interactive play. 
        Groom as needed, provide identification, and create a safe environment. 
        Spend quality time with your cat, encourage regular exercise, and offer comfortable resting places. 
        Monitor their behavior for any changes, and consult your veterinarian for personalized care.
      </p>
    </div>
  `;
  
  this.dogComponent = `
    <div class="component" id="dog">
   
      <h2 class="component-title">Dog</h2>
      <p class="component-text">
        A domesticated carnivorous mammal, Canis lupus familiaris.
        To care for your dog, provide a nutritious diet tailored to their size and breed. Keep them hydrated with fresh water, and schedule regular veterinary check-ups for vaccinations and preventive care. Maintain a clean living environment and offer toys for mental and physical stimulation. Regular exercise, grooming, and social interaction are essential for their well-being.
        Ensure proper identification with a collar and ID tag, and be attentive to any changes in behavior or health.
      </p>
    </div>
  `;
  
  this.parrotComponent = `
    <div class="component" id="parrot">
   
      <h2 class="component-title">Parrot</h2>
      <p class="component-text">
        Colorful and intelligent birds known for their ability to mimic human speech.
        Caring for your parrot involves offering a varied and balanced diet with fresh fruits, vegetables, and pellets. Provide a clean and spacious cage, offering toys and opportunities for mental stimulation. 
        Regular veterinary check-ups are crucial for their health. Spend time interacting with your parrot through talking, playing, and socializing. 
        Create a safe and enriching environment, monitor their behavior for signs of distress, and offer a consistent daily routine for their well-being.
      </p>
    </div>
  `;

  
    if (this.componentsContainer) {
      this.componentsContainer.innerHTML = this.catComponent + this.dogComponent + this.parrotComponent;
    } else {
      console.error('componentsContainer not found!');
    }
  }
}
