//import { pathsToModuleNameMapper } from 'ts-jest'
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
//import { compilerOptions } from './tsconfig.json' assert { type: "json" }

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // [...]
  //roots: ['<rootDir>'],
  //modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  //moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  preset: "ts-jest",
  testEnvironment: "node"
};