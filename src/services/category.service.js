class CategoryService {
        constructor() {
            this.categories = [];
            this.addCategory();
        }
    
        addCategory() {
            //DATA
        }
    
        async createCategory(data) {
            const newCategory = {
                ...data,
            };
            this.categories.push(newCategory);
            return newCategory;
        }
    
        async getCategories() {
            return new Promise((resolve) => {
                resolve(this.categories);
            });
        }
    
        async getCategoryById(id) {
            const category = this.categories.find((category) => category.id === id);
            if (!category) {
                console.log('error')
            }
            if (category.isBlock) {
                console.log('error')
            }
            return category;
        }
    
        async updateCategoryById(id, changes) {
            const index = this.categories.findIndex((category) => category.id === id);
    
            if (index === -1) {
                console.log('error')
            } else {
                const category = this.categories[index];
                if (category.isBlock) {
                    console.log('error')
                }
                this.categories[index] = {
                    ...category,
                    ...changes,
                };
                return this.categories[index];
            }
        }
    
        async deleteCategoryById(id) {
            const index = this.categories.findIndex((category) => category.id === id);
            if (index === -1) {
                console.log('error')
            }
            this.categories.splice(index, 1);
            return { id };
        }
    }
    
    module.exports = CategoryService;
