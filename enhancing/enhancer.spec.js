const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durabillity to 100', () => {
            expect(enhancer.repair({ durability: 75 }).durability).toBe(100);
            expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
            expect(enhancer.repair({ durability: -75 }).durability).toBe(100);
            expect(enhancer.repair({ durability: 0 }).durability).toBe(100);
            
        })
    })

    describe('succeed()', () => {
        it('adds one to enhance if < 20', () => {
            expect(enhancer.succeed({ enhancement: 20 }).enhancement).toBe(20);
            expect(enhancer.succeed({ enhancement: 18 }).enhancement).toBe(19);
            expect(enhancer.succeed({ enhancement: 30 }).enhancement).toBe(20);
            expect(enhancer.succeed({ enhancement: -10 }).enhancement).toBe(-9);

        })
    })
    describe('fail()', () => {
        it('adds one to enhance if < 20', () => {
            expect(enhancer.fail({ enhancement: 10, durability: 50 }).durability).toBe(45);

            expect(enhancer.fail({ enhancement: 17, durability: 10  }).durability).toBe(0);

            expect(enhancer.fail({ enhancement: 17, durability: 10  }).enhancement).toBe(16);

            expect(enhancer.fail({ enhancement: 5, durability: 10 }).durability).toBe(5);

            expect(enhancer.fail({ enhancement: -10, durability: 10 }).durability).toBe(5);

           
        })
    })

    describe('get()', () => {
        it('gets item and add enhancement value to name if enhancement > 0', () => {
            expect(enhancer.get({ name: 'St.Lou', enhancement: 5 }).name).toBe('[+5]St.Lou');
            expect(enhancer.get({ name: 'St.Lou', enhancement: 0 }).name).toBe('St.Lou');
        })
    })

})
