import { Util } from './domUtils';

export class StackCards {
  constructor(element) {
    this.element = element;
    this.items = this.element.getElementsByClassName('js-stack-cards__item');
    this.scrollingFn = false;
    this.scrolling = false;
    this.marginY = 0;
    this.elementHeight = 0;
    this.cardTop = 0;
    this.cardHeight = 0;
    this.windowHeight = 0;
    this.initStackCardsEffect();
    this.initStackCardsResize();
  }

  initStackCardsEffect() {
    this.setStackCards();
    const observer = new IntersectionObserver(this.stackCardsCallback.bind(this), { threshold: [0, 1] });
    observer.observe(this.element);
  }

  initStackCardsResize() {
    this.element.addEventListener('resize-stack-cards', () => {
      this.setStackCards();
      this.animateStackCards();
    });
  }

  stackCardsCallback = (entries) => {
    if (entries[0].isIntersecting) {
      if (this.scrollingFn) {
        return;
      } // listener for scroll event already added
      this.stackCardsInitEvent();
    } else {
      if (!this.scrollingFn) {
        return;
      } // listener for scroll event already removed
      window.removeEventListener('scroll', this.scrollingFn);
      this.scrollingFn = false;
    }
  };

  stackCardsInitEvent() {
    this.scrollingFn = this.stackCardsScrolling.bind(this);
    window.addEventListener('scroll', this.scrollingFn);
  }

  stackCardsScrolling() {
    if (this.scrolling) {
      return;
    }
    this.scrolling = true;
    window.requestAnimationFrame(this.animateStackCards.bind(this));
  }

  setStackCards() {
    // store wrapper properties
    const computedStyle = getComputedStyle(this.element);
    this.marginY = this.getIntegerFromProperty(computedStyle.getPropertyValue('--stack-cards-gap'));
    this.elementHeight = this.element.offsetHeight;

    // store card properties
    const cardStyle = getComputedStyle(this.items[0]);
    const topOffset = cardStyle.getPropertyValue('top');

    // Handle different top offset units (vh, px, etc.)
    if (topOffset.includes('vh')) {
      this.cardTop = Math.floor((parseFloat(topOffset) / 100) * window.innerHeight);
    } else {
      this.cardTop = Math.floor(parseFloat(topOffset));
    }

    // Get actual card height from rendered element
    const firstItem = this.items[0];
    this.cardHeight = firstItem.offsetHeight || 300;

    // store window property
    this.windowHeight = window.innerHeight;

    // Set up initial positioning for sticky cards
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (isNaN(this.marginY)) {
        item.style.transform = 'none';
      } else {
        // Set initial transform for stacking
        item.style.transform = 'translateY(' + this.marginY * i + 'px)';
      }
    }
  }

  getIntegerFromProperty(property) {
    const node = document.createElement('div');
    node.setAttribute('style', 'opacity:0; visibility: hidden; position: absolute; height:' + property);
    this.element.appendChild(node);
    const height = parseInt(getComputedStyle(node).getPropertyValue('height'));
    this.element.removeChild(node);
    return height;
  }

  animateStackCards() {
    if (isNaN(this.marginY)) {
      // --stack-cards-gap not defined - do not trigger the effect
      this.scrolling = false;
      return;
    }

    const top = this.element.getBoundingClientRect().top;

    if (
      this.cardTop -
        top +
        this.windowHeight -
        this.elementHeight -
        this.cardHeight +
        this.marginY +
        this.marginY * this.items.length >
      0
    ) {
      this.scrolling = false;
      return;
    }

    for (let i = 0; i < this.items.length; i++) {
      // use only scale
      const scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
      if (scrolling > 0) {
        const scaling = i === this.items.length - 1 ? 1 : (this.cardHeight - scrolling * 0.05) / this.cardHeight;
        this.items[i].style.transform =
          'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
      } else {
        this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px)';
      }
    }

    this.scrolling = false;
  }
}

// Initialize StackCards
export function initStackCards() {
  const stackCards = document.getElementsByClassName('js-stack-cards');
  const intersectionObserverSupported =
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype;
  const reducedMotion = Util.osHasReducedMotion();

  if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
    const stackCardsArray = [];
    for (let i = 0; i < stackCards.length; i++) {
      stackCardsArray.push(new StackCards(stackCards[i]));
    }

    let resizingId = false;
    const customEvent = new CustomEvent('resize-stack-cards');

    window.addEventListener('resize', () => {
      if (resizingId) {
        clearTimeout(resizingId);
      }
      resizingId = setTimeout(() => {
        for (let i = 0; i < stackCardsArray.length; i++) {
          stackCardsArray[i].element.dispatchEvent(customEvent);
        }
      }, 500);
    });
  }
}
