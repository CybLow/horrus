/** @type {import('next').NextConfig} */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        if (!dev && !isServer) {
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                            dead_code: true,
                            conditionals: true,
                            evaluate: true,
                            booleans: true,
                            loops: true,
                            unused: true,
                            hoist_funs: true,
                            keep_fargs: false,
                            hoist_vars: true,
                            if_return: true,
                            join_vars: true,
                            reduce_vars: true,
                            side_effects: true,
                            warnings: false,
                            ecma: 2015,
                        },
                        mangle: true,
                        output: {
                            comments: false,
                        },
                    },
                }),
            ];
        }
        return config;
    },
};