class MallService {
        constructor() {
            this.malls = [];
            this.addMalls();
        }
    
        addMalls() {
            //DATA
        }
    
        async createMall(data) {
            const newMall = {
                ...data,
            };
            this.Malls.push(newMall);
            return newMall;
        }
    
        async getMalls() {
            return new Promise((resolve) => {
                resolve(this.malls);
            });
        }
    
        async getMallById(id) {
            const Mall = this.Malls.find((Mall) => Mall.id === id);
            if (!Mall) {
                console.log('error')
            }
            if (Mall.isBlock) {
                console.log('error')
            }
            return Mall;
        }
    
        async updateMallById(id, changes) {
            const index = this.Malls.findIndex((Mall) => Mall.id === id);
    
            if (index === -1) {
                console.log('error')
            } else {
                const Mall = this.Malls[index];
                if (Mall.isBlock) {
                    console.log('error')
                }
                this.Malls[index] = {
                    ...Mall,
                    ...changes,
                };
                return this.Malls[index];
            }
        }
    
        async deleteMallById(id) {
            const index = this.Malls.findIndex((Mall) => Mall.id === id);
            if (index === -1) {
                console.log('error')
            }
            this.Malls.splice(index, 1);
            return { id };
        }
    }
    
    module.exports = MallService;
