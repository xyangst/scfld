type parseRes =
    | { user: string; repo: string; branch?: string; sub?: string }
    | false;

export function parseGitHubLink(link: string): parseRes {
    const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\//;
    if (!githubRegex.test(link)) {
        throw new Error();
    }

    const cleanLink = link.replace(githubRegex, '');
    const match = cleanLink.split('/').filter(Boolean);

    if (match.length >= 2) {
        let sub = match.slice(4).join('/');
        return {
            user: match[0],
            repo: match[1],
            branch: match[3],
            sub: sub === '' ? undefined : sub,
        };
    }

    return false;
}
export function parseCustomInput(arg: string): parseRes {
    const regex = /^(\w+)\/(\w+)(?:#(\w+))?(?:\/(\w+))?$/;
    const match = arg.match(regex);
    if (match) {
        const [, user, repo, branch, sub] = match;
        return { user, repo, branch, sub };
    }
    return false;
}
