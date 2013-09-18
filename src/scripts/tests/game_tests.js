/* globals, describe, beforeEach, it, expect, Prison */
(function () {
    "use strict";

    describe("Prison Game", function () {
        var game;

        beforeEach(function () {
            game = new Prison.Game();
        });

        it("Exists", function () {
            expect(game).not.toBe(undefined);
        });

        it("Is a Prison Game", function () {
            expect(game instanceof Prison.Game).toBeTruthy();
        });

        describe("Area", function () {
            var area;

            beforeEach(function () {
                area = new Prison.Area();
            });

            it("Exists", function () {
                expect(area).not.toBe(undefined);
            });

            it("Is a Prison Area", function () {
                expect(area instanceof Prison.Area).toBeTruthy();
            });

            it('throws when add Block is given null', function () {
                expect(function () {
                    area.addBlock(null);
                }).toThrow();
            });

            it('throws when add Block is given incorrect type', function () {
                expect(function () {
                    area.addBlock(1);
                }).toThrow();
            });

            it('can have block', function () {
                var pt = new Prison.Block(0, 0, 0);
                area.addBlock(pt);

                expect(area.block).not.toBe(undefined);
                expect(area.block).not.toBe(null);
                expect(area.block[0]).toBe(pt);
            });

            it("Can add multiple Areas", function () {
                var area1 = "1";
                var area2 = "2";
                game.addArea(area1);
                game.addArea(area2);
                expect(game.areas.length).toBe(2);
            });
        });

        describe("Prison Block", function () {
            var Block;
            beforeEach(function () {
                Block = new Prison.Block();
            });

            it("Exists", function () {
                expect(Block).not.toBe(undefined);
            });

            it("Is a Prison Block", function () {
                expect(Block instanceof Prison.Block).toBeTruthy();
            });
        });
    });
}());