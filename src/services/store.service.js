class StoreService {
    constructor() {
        this.store = [];
        this.addItem();
    }

    addItem() {
        //DATA    
    }

    async createStore(data) {
        const newItem = {
            ...data,
        };
        this.store.push(newItem);
        return newItem;
    }

    async getStores() {
        return new Promise((resolve) => {
            resolve(this.store);
        });
    }

    async getItemById(id) {
        const item = this.store.find((item) => item.id === id);
        if (!item) {
            console.log('error')
        }
        if (item.isBlock) {
            console.log('error')
        }
        return item;
    }

    async updateItemById(id, changes) {
        const index = this.store.findIndex((item) => item.id === id);

        if (index === -1) {
            console.log('error')
        } else {
            const item = this.store[index];
            if (item.isBlock) {
                console.log('error')
            }
            this.store[index] = {
                ...item,
                ...changes,
            };
            return this.store[index];
        }
    }

    async deleteItemById(id) {
        const index = this.store.findIndex((item) => item.id === id);
        if (index === -1) {
            console.log('error')
        }
        this.store.splice(index, 1);
        return { id };
    }
}

module.exports = StoreService;
