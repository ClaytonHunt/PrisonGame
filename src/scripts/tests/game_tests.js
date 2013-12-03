/* globals, describe, beforeEach, it, expect */
(function (module) {
    "use strict";

    describe("Prison Game", function () {
        var game;

        beforeEach(function () {
            game = new module.Game();
        });

        describe("In General", function() {
            it("Exists", function () {
                expect(game).not.toBe(undefined);
            });

            it("Is a Prison Game", function () {
                expect(game instanceof module.Game).toBeTruthy();
            });
        });

        describe("Area", function () {
            var area;

            beforeEach(function () {
                area = new module.Area();
            });

            it("Exists", function () {
                expect(area).not.toBe(undefined);
            });

            it("Is a Prison Area", function () {
                expect(area instanceof module.Area).toBeTruthy();
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
                var pt = new module.Block(0, 0);
                area.addBlock(pt);

                expect(area.blocks).not.toBe(undefined);
                expect(area.blocks).not.toBe(null);
                expect(area.blocks[0]).toBe(pt);
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
            var block;
            beforeEach(function () {
                block = new module.Block(1, 2);
            });

            it("Exists", function () {
                expect(block).not.toBe(undefined);
            });

            it("Is a Prison Block", function () {
                expect(block instanceof module.Block).toBeTruthy();
            });

            it('requires x value in constructor', function () {
                expect(function () {
                    new module.Block();
                }).toThrow();
            });

            it('requires y value in constructor', function () {
                expect(function () {
                    new module.Block(0);
                }).toThrow();
            });

            it('sets x value from constructor', function () {
                expect(block.x).toBe(1);
            });

            it('sets y value from constructor', function () {
                expect(block.y).toBe(2);
            });
        });
    });
}(Prison));