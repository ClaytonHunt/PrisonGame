var Prison = Prison || {};

Prison.Block = function (x, y) {
    "use strict";
    var self = this;
    var __ = {};

    __.constructorChecks = function () {
        if (!x && x !== 0)
            throw 'X value is required!';

        if (!y && y !== 0)
            throw 'X value is required!';
    };

    self.x = x;
    self.y = y;

    (function () {
        __.constructorChecks();
    }());

    return self;
};

Prison.Area = function () {
    "use strict";
    var self = this;

    self.blocks = [];

    self.addBlock = function (Block) {
        if (!Block || !(Block instanceof Prison.Block))
            throw 'Argument type incorrect use Prison.Block.';

        self.blocks.push(Block);
    };

    return self;
};

Prison.Game = function () {
    "use strict";
    var self = this;

    self.areas = [];

    self.addArea = function (area) {
        self.areas.push(area);
    };

    return self;
};