const storeData = require('../data/store-data.js');

class StoreService {
    constructor() {
        this.stores = [];
        this.addStore();
    }

    addStore() {
        this.stores.push(storeData.forEach((store) => {
            this.stores.push(store);
          }));
    }

    async createStore(data) {
        const newItem = {
            ...data,
        };
        this.stores.push(newItem);
        return newItem;
    }

    async getStores() {
        return new Promise((resolve) => {
            resolve(this.stores);
        });
    }

    async getStoreById(id) {
        const item = this.stores.find((store) => store.id === id);
        if (!store) {
            console.log('error')
        }
        if (store.isBlock) {
            console.log('error')
        }
        return store;
    }

    async updateStoreById(id, changes) {
        const index = this.stores.findIndex((store) => store.id === id);

        if (index === -1) {
            console.log('error')
        } else {
            const store = this.stores[index];
            if (store.isBlock) {
                console.log('error')
            }
            this.stores[index] = {
                ...store,
                ...changes,
            };
            return this.stores[index];
        }
    }

    async deleteStoreById(id) {
        const index = this.stores.findIndex((store) => store.id === id);
        if (index === -1) {
            console.log('error')
        }
        this.stores.splice(index, 1);
        return { id };
    }
}

module.exports = StoreService;
