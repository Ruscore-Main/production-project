import { BuildOptions } from "./types/config";
import path from "path";
import webpack from "webpack";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { paths, mode } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}
