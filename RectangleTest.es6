let chai = require('chai');
let expect = require('chai').expect;
let path = require('path');

let Rectangle = require(path.join(__dirname, '.', 'Rectangle'));

describe('Rectangle', () => {
    describe('#width', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the width', () => {
            expect(rectangle.width).to.equal(10);
        });

        it('can be changed', () => {
          //
        });
    });
});
