import { describe, expect, test } from 'bun:test';
import { parseGitHubLink as parse } from '~/utils/stringParsing';
describe('parse', () => {
    test('github string', () => {
        const userRepoOnly = {
            user: 'user',
            repo: 'repo',
            branch: undefined,
            sub: '',
        };
        expect(parse('github.com/user/repo')).toEqual(userRepoOnly);
        expect(parse('user/repo')).toEqual(userRepoOnly);
        expect(parse('https://github.com/user/repo')).toEqual(userRepoOnly);
        expect(parse('www.github.com/user/repo')).toEqual(userRepoOnly);
    });
    test('custom string', () => {});
});
