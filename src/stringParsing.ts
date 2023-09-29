export function parseGitHubLink(link: string): parseRes {
    const cleanLink = link.replace(/^https?:\/\/(?:www\.)?github\.com\//, ''); // Remove protocol and domain
    const match = cleanLink.split('/').filter(Boolean);

    if (match.length >= 2) {
        return {
            user: match[0],
            repo: match[1],
            branch: match[3],
            sub: match.slice(4).join('/'),
        };
    }

    return false;
}
type parseRes =
    | { user: string; repo: string; branch?: string; sub?: string }
    | false;

export function parseCustomInput(arg: string): parseRes {
    const regex = /^(\w+)\/(\w+)(?:#(\w+))?(?:\/(\w+))?$/;
    const match = arg.match(regex);
    if (match) {
        const [, user, repo, branch, sub] = match;
        return { user, repo, branch, sub };
    }
    return false;
}
