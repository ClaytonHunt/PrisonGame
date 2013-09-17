var Prison = Prison || {};
Prison.Game = function() {
    var self = this;

    self.areas = [];

    self.addArea = function(area) {
        self.areas.push(area);
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
        it("Can add multiple Areas", function() {
            var area1 = "1";
            var area2 = "2";
            game.addArea(area1);
            game.addArea(area2);
            expect(game.areas.length).toBe(2);
        });
    });
});