const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durabillity to 100', () => {
            expect(enhancer.repair({ durability: 75 }).durability).toBe(100);
            expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
            expect(enhancer.repair({ durability: -75 }).durability).toBe(100);
            expect(enhancer.repair({ durability: 0 }).durability).toBe(100);
            expect(enhancer.repair({ durability: 'word' }).durability).toBe(100);
        })
    })

    describe('succeed()', () => {
        it('adds one to enhance if < 20', () => {
            expect(enhancer.succeed({ enhancement: 20 }).enhancement).toBe(20);
            expect(enhancer.succeed({ enhancement: 18 }).enhancement).toBe(19);
            expect(enhancer.succeed({ enhancement: 0 }).enhancement).toBe(1);
            expect(enhancer.succeed({ enhancement: -10 }).enhancement).toBe(-9);

        })
    })
})
