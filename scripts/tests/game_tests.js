var Prison = Prison || {};
Prison.Game = function() {
    var self = this;

    self.areas = null;

    self.addArea = function(area) {
        self.areas = area;
    };

    return self;
};

describe("Prison Game", function() {
    var game;

    beforeEach(function() {
        game = new Prison.Game();
    });

    it("Exists", function(){
        expect(game).not.toBe(null);
    });

    it("Is a Prison Game", function() {
        expect(game instanceof Prison.Game).toBeTruthy();
    });

    describe("Area", function() {
        it("can be added", function() {
            var area = "";
            game.addArea(area);

            expect(game.areas).not.toBe(null);
        });

        it("Can have multiple Areas", function() {
            var area1 = "1";
            var area2 = "2";
            game.addArea(area1);
            game.addArea(area2);

        });
    });
});