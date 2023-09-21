export default {
    input: 'src/is.js',
    output: {
        file: 'dist/is.bundle.js',
        format: 'es',
        sourcemap: true
    },
    // Fix rewriting of .call(this) to .call(undefined)
    context: 'this'
}
