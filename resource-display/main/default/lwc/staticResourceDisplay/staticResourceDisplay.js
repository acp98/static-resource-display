import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class StaticResourceDisplay extends LightningElement {
    @api recordId;
    @api fieldName;
    @api keyValue1;
    @api keyValue2;
    @api keyValue3;
    @api keyValue4;
    @api keyValue5;
    @api keyValue6;
    @api keyValue7;
    @api keyValue8;
    @api keyValue9;
    @api keyValue10;

    
    account;
    images = [];
    isDataLoaded = false;

    get noImages() {
        return this.images.length === 0;
    }

    get fields() {
        return this.fieldName ? [this.fieldName] : [];
    }

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' })
    wiredRecord({ error, data }) {
        if (data) {
            this.account = data;
            this.updateImages();
            if (this.noImages) {
                this.isDataLoaded = false;
            }else{
                this.isDataLoaded = true;
            }
        } else if (error) {
            this.isDataLoaded = false;
        }
    }

    get fieldValue() {
        return getFieldValue(this.account, this.fieldName);
    }

    updateImages() {
        const fieldData = this.fieldValue;
        const imageMap = this.constructImageMap();

        this.images = Object.entries(imageMap).reduce((acc, [key, resourceName]) => {
            if (fieldData && fieldData.includes(key)) {
                const imageUrl = this.getResourceUrl(resourceName);
                acc.push({ url: imageUrl, label: `Image for ${key}` });
            }
            return acc;
        }, []);

    }

    constructImageMap() {
        let imageMap = {};
        for (let i = 1; i <= 10; i++) {
            let keyValue = this[`keyValue${i}`];
            if (keyValue) {
                let [key, value] = keyValue.split(':').map(item => item.trim());
                imageMap[key] = value;
            }
        }
        return imageMap;
    }

    getResourceUrl(resourceName) {
        return `/resource/${resourceName}`;
   
    }
}