import ServiceFeatureClass from "src/js/ServiceFeatures/ServiceFeature/ServiceFeatureClass";

export default class ServiceFeatures {
  constructor(features) {
    this.prepareFeatures(features);
    this.currentPageIndex = 0;
    this.pages = [];
    this.splitToPages();
  }

  prepareFeatures(features) {
    this.features = []
    for (let feature of features) {
      this.features.push(new ServiceFeatureClass(feature));
    }
  }

  splitToPages() {
    if (this.features.length <= 6) {
      // if there are less than 6 features, then we don't need to split them into pages
      this.pages = [this.features];
    } else {
      // setting first page with first 5 features
      this.pages = [this.features.slice(0, 5)];
      let i = 0;
      // setting pages with 4 features each
      for (i; i < Math.floor((this.features.length - 5) / 4) - 1; i++) {
        this.pages.push(this.features.slice(5 + i * 4, 9 + i * 4));
      }
      let leftBorder = 9 + (i - 1) * 4;
      let rightBorder = 13 + (i - 1) * 4;
      // checking if there are more than 5 features left
      if (this.features.slice(leftBorder).length <= 5) {
        // if there are less than 5 features left, then we add them to the last page
        this.pages.push(this.features.slice(leftBorder));
      } else {
        // if there are more than 5 features left, then we add 4 features to the penultimate page
        this.pages.push(this.features.slice(leftBorder, rightBorder));
        // and other features to the last page
        this.pages.push(this.features.slice(rightBorder));
      }
    }
  }

  get currentPage() {
    return this.pages[this.currentPageIndex];
  }

  get isFirstPage() {
    return this.currentPageIndex === 0;
  }

  get isLastPage() {
    return this.currentPageIndex === this.pages.length - 1;
  }

  next() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
    }
  }

  prev() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }

  get featuresLeft() {
    let count = 0;
    for (let i = this.currentPageIndex + 1; i < this.pages.length; i++) {
      count += this.pages[i].length;
    }
    return count;
  }

  get featuresWas() {
    let count = 0;
    for (let i = 0; i < this.currentPageIndex; i++) {
      count += this.pages[i].length;
    }
    return count;
  }
}
