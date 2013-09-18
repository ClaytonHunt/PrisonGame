var Prison = Prison || {};

Prison.Block = function () {
    "use strict";
    var self = this;

    return self;
};

Prison.Area = function () {
    "use strict";
    var self = this;
    var __ = {};

    self.block = [];

    self.addBlock = function (Block) {
        if (!Block || !(Block instanceof Prison.Block))
            throw 'Argument type incorrect use Prison.Block.';

        self.block.push(Block);
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