import ts from "typescript";

export const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
    throw new Error(`unimplemented`);
    // return (sourceFile) => {
    //     const visitor = (node: ts.Node): ts.Node => {
    //         if (ts.isFunctionDeclaration(node)) {
    //             context.hoistFunctionDeclaration(node);
    //             return node;
    //         }

    //         return ts.visitEachChild(node, visitor, context);
    //     };

    //     return ts.visitNode(sourceFile, visitor);
    // };
};
