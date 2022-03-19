# Grandma's Recipies

## Contributing to the Project

### Setup

1. Please clone the project using the following command: 
`git clone https://github.com/rbridge1104byui/CSE341-Final_project.git`

1. Open the project directory in your text editor. Then switch to the `dev` branch by using the text editor's GUI or by entering the following command in the terminal: `git checkout dev`

### Creating a branch

1. From the `dev` branch, create a feature branch including your first name (replace "my-feature" with a simple name for what you are working on): `git branch chris-my-feature`

1. Switch to your new branch: `git checkout [branch name]`

1. Or do it all in one command (this creates a new branch and switches to it at the same time): `git checkout -b [branch name]`

1. Send your newly created branch to the remote repository so you can push to it: `git push origin [branch name]`
### Start coding

1. Get to work! Commit your changes often with the following commands:
    - `git add .`
    - `git commit -m "My detailed commit message"`

1. Always `pull` from `dev` before starting your work and **again before pushing your changes**: `git pull origin dev`

1. You can also run `git fetch` to see all changes to the repository.

1. At any time, use `git status` for hints on what needs to be done next.

### Pushing to your branch 
(Don't forget to pull first)

1. Set an upstream branch before trying to push in the next step: 
`git push --set-upstream origin [branch name]` (This only needs to be done once per new branch)

1. Finally, run `git push` to send your work to the remote repository. 

### Pull requests

1. Once ready to merge your feature into `dev`, visit the GitHub repository in the browser. You should see a yellow box with a green button `Compare & pull request` regarding your feature branch, near the top of the repository.

1. You can also select the `Pull Request` tab to proceed and find the same `Compare & pull request` button.

1. If all else fails, select the green `New pull request` button and choose the branch you want to pull into `dev`. On the `Comparing changes` screen, compare changes and then select `Create pull request`.

1. After clicking the green button, on the **Open a pull request** page, make sure to select the branch dropdown and choose `dev` if it's not already selected.

1. Leave any comments you like and select the `Create pull request` button.

1. In the `Reviewers` section on the right, select **Gary**.

1. Once reviewed, the `Merge pull request` button can be selected.

1. Click `Confirm merge`.

### Deleting feature branch

1. When you receive the following message: `Pull request successfully merged and closed`, you can safely delete the remote feature branch with the button to the right.

1. To delete the branch locally, switch to `dev` and run `git branch -d [branch name]` and then repeat steps to create a branch for your next feature!

### More help

Questions? Ask in Slack or check out [this handy guide](https://github.com/joshnh/Git-Commands).