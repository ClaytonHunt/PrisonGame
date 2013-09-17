/* globals, describe, beforeEach, it, expect */

(function () {
    "use strict";

    var Prison = Prison || {};

    Prison.Area = function (width) {
        var self = this;
        var __ = {};

        __.constructorChecks = function () {
            if (!width)
                throw 'Area width is required!';
        };

        self.width = width;

        (function () {
            __.constructorChecks();
        }());

        return self;
    };

    Prison.Game = function () {
        var self = this;

        self.areas = [];

        self.addArea = function (area) {
            self.areas.push(area);
        };

        return self;
    };

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
                area = new Prison.Area(10);
            });

            it("Exists", function () {
                expect(area).not.toBe(undefined);
            });

            it("Is a Prison Area", function () {
                expect(area instanceof Prison.Area).toBeTruthy();
            });

            it("throws when width is not passed to constructor", function () {
                expect(function () {
                    return new Prison.Area();
                }).toThrow();
            });

            it("has width", function () {
                expect(area.width).not.toBe(undefined);
                expect(area.width).not.toBe(null);
            });

            it("Can add multiple Areas", function () {
                var area1 = "1";
                var area2 = "2";
                game.addArea(area1);
                game.addArea(area2);
                expect(game.areas.length).toBe(2);
            });
        });
    });
}());