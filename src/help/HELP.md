Fetches the `src` repo, and extracts it to `dest` (or the current repo name).

The `src` argument can be any of the following:

Options:

  `--help`,    `-h`  Show this message
  `--force`,   `-f`  Allow non-empty destination directory
  `--verbose`, `-v`  Extra logging (currently none)

## GitHub repos

user/repo
https://github.com/user/repo
github.com/user/repo

## Branches

user/repo#branch
https://github.com/user/repo/blob/branch

## Subfolders

user/repo/sub/folder
https://github.com/user/repo/blob/branch/sub/folder

## dest
The `dest` directory (or the directory named after the repo, if unspecified) must be empty
unless the `--force` option is used.

See https://github.com/xyangst/scfld for more information
