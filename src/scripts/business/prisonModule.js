var Prison = (function () {
    return this;
}());

(function(module){
    "use strict";

    module.Game = function() {
        return this;
    };

    module.Game.prototype.areas = [];

    module.Game.prototype.addArea = function (area) {
        var self = this;
        self.areas.push(area);
    };
}(Prison));

(function(module) {
    "use strict";

    module.Area = function() {
        return this;
    };

    module.Area.prototype.blocks = [];

    module.Area.prototype.addBlock = function (block) {
        if (!block || !(block instanceof module.Block))
            throw 'Argument type incorrect use Prison.Block.';
        var self = this;
        self.blocks.push(block);
    };
}(Prison));

(function(module){
    "use strict";

    module.Block = function (x,y) {
        var self = this;
        _constructorChecks(x, y);

        self.x = x;
        self.y = y;

        return self;
    };

    function _constructorChecks(x, y) {
        if (!x && x !== 0)
            throw 'X value is required!';

        if (!y && y !== 0)
            throw 'X value is required!';
    }
}(Prison));
