// import { describe, expect, test } from 'bun:test';
// import { parseGitHubLink as parse } from './stringParsing';
// const userRepoOnly = {
//     user: 'user',
//     repo: 'repo',
// };
// const branchNoSub = {
//     user: 'user',
//     repo: 'repo',
//     branch: 'branch',
// };
// const branchSubDefined = {
//     user: 'user',
//     repo: 'repo',
//     branch: 'branch',
//     sub: 'sub',
// };
// describe('parse', () => {
//     test('github string', () => {
//         expect(parse('github.com/user/repo')).toEqual(userRepoOnly);
//         expect(parse('github.com/user/repo')).toEqual(userRepoOnly);
//         expect(parse('https://github.com/user/repo')).toEqual(userRepoOnly);
//         expect(parse('github.com/user/repo')).toEqual(userRepoOnly);
//         expect(parse('user/repo')).toThrow();
//     });
//     test('github branch', () => {
//         expect(parse('github.com/user/repo/tree/branch/sub')).toEqual(
//             branchSubDefined,
//         );
//         expect(parse('github.com/user/repo/blob/branch')).toEqual(branchNoSub);
//         expect(parse('user/repo/branch/sub')).toThrow();
//     });
//     // //test('custom string', () => {});
// });
