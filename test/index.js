const runner = require("ts-node");
const path = require("path");

runner.register({
    project: path.join(__dirname, "../tsconfig.test.json"),
    compiler: "ttypescript",
});

require("./index.ts");
