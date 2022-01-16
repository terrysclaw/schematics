import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { Schema } from './schema';

import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crud(_options: Schema): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const sourceTemplate = url('./files'); // 取得 template 檔案
        const sourceParameterizedTemplates = apply(sourceTemplate, [
            template({
                ..._options,
                ...strings,
            })
        ]);

        return mergeWith(sourceParameterizedTemplates)(tree, _context);

    };
}
