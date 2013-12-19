ZSH=$HOME/.oh-my-zsh

ZSH_THEME="af-magic"

. /usr/bin/z.sh
alias zsh="subl ~/.zshrc"

# Git
alias gits='git status'
alias gitpl='git pull'
alias gitps='git push'
alias gitpst='git push --tags'
alias gitb='git branch -a'
alias gitf='git fetch -a'
alias gitap='git add -p'
alias gita='git add'
alias gitck='git checkout'
alias gitc='git commit -m'
alias gitm='git merge'
alias gitst='git stash'
alias gitstp='git stash pop'
alias gitr='git reset HEAD'
alias gitl='git log'
alias gitsu='git submodule update'
alias gitrm='git rm -r'
alias gitmv='git mv'
alias gitt='git tag'

plugins=(git)

source $ZSH/oh-my-zsh.sh

export PATH=$PATH:/usr/lib/lightdm/lightdm:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games
