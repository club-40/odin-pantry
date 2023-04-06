# DRAFT Contributing Guidelines

Thank you for considering a contribution to the club-40 group project! To get you started, here are a few guidelines we would like you to follow:

* [Issues and Bugs](#issue)
* [Feature Requests](#feature)

## <a name="question"></a> Got a Question?

Please do not open issues for general support such as "how to install this plugin" as we want to keep this issue tracker
for bug reports and feature requests. Instead, we suggest you use the discussion feature.

## <a name="issue"></a> Found a Bug?

If you find a bug in the code, you can help us by [submitting an issue](#submit-issue).
Or, better, submit a [pull request](#submit-pr) with a fix readily available!

## <a name="feature"></a> Missing a feature?

You can request a new feature by [submitting an issue](#submit-issue) to the issue tracker.
If you would like to implement a new feature, please consider the impact it would have on the codebase:

* For a major impact affecting multiple files, adding wholly new topics and sections to the documentation, etc.:
    please open an issue first, outlining your proposal so that it can be discussed.
    This allows us to better coordinate our resources around your proposal and help you in crafting your contribution.

* Small features can be put together and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit a new issue, please search the issue tracker, maybe an issue relating to your problem already exists,
and the discussion might inform you of fixes readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. Please provide as much information as possible in your initial post and be on the lookout for a response asking for additional information.

You can file new issues by selecting from our
[new issue templates]( TODO ) and filling out the issue template.

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request, follow these steps:

1. Search [GitHub](TODO ) for an open or closed PR that relates to your submission.
   You wouldn't want to duplicate existing efforts.

1. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you're adding.
   Discussing the design upfront helps to ensure that we're ready to accept your work.

1. [Fork](https://github.com/Club-40/group-project-1 ) and then clone your fork.

1. Load in the clone of your fork via the plugin loader of your choice.

1. In your cloned repository, make your changes in a new branch:

    ```shell
    git checkout -b my-branch master
    ```

1. Make your changes, including tests when appropriate. Please refer to [`test/README.md`](TODO ) for a guide.

2. Follow the current coding style as close as possible. Simply take a look at other files and stick to their styling.

3. Commit your changes using a descriptive commit message following our [commit message conventions](#commit).

4. Push your branch to GitHub:

   ```shell
   git push origin my-branch
   ```

5. On GitHub, send a pull request to `TODO`.

#### Addressing review feedback

If we ask for changes via code reviews then:

1. Make the required updates to the code.

1. Push the new changes to your repository (this will update your Pull Request as well)

   ```shell
   git push --force-with-lease
   ```

#### After your pull request is merged

After your PR is merged, you can safely delete your branch and pull the changes from the upstream repository.

## <a name="commit"></a> Commit Message Format

Formatting commit messages according to a specification makes it easier to read commit history.

Each commit message consists of a header, a body, and a footer:

```txt
<header>
<blank line>
<body>
<blank line>
<footer>
```

The `header` is mandatory and must conform to the [commit header](#commit-header) format.

The `body` is mandatory. The [commit body](#commit-body) structure describes how it should be used.

The `footer` is optional. The [commit footer](#commit-footer) format describes what the footer is used for.

## <a name="commit-header"></a> Commit Message Header

```txt
<scope>: <short summary>
   |           |
   |           └─> Summary in present tense. Not capitalized. No period at the end.
   |
   └─> Commit Scope: Where did this commit happen?
         e.g. docs, syntax, folding, keybinds, github, legal, ...
```

### Scope

The scope should be descriptive. If your commit contained multiple scopes, split them up appropriately and consider
individual pull requests should they not depend on each other.

### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### <a name="commit-body"></a> Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body.
This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

### <a name="commit-footer"></a> Commit Message Footer

The footer can contain information about breaking changes (if any) and is also the place to reference GitHub issues
and other PRs that this commit closes or is related to, as well as Co-Authors:

```txt
BREAKING CHANGE: <breaking change summary>
<blank line>
<breaking change description + migrate instructions>
<blank line>
Fixes #<issue number>
<blank line>
Co-authored-by: name <name@example.com>
```

#### Revert commits

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit.

The content of the commit message body should contain:

* information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
* a clear description of the reason for reverting the commit message.
